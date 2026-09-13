import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

// Vidu CRM API Feed Endpoint
serve(async (req) => {
  // 1. Authenticate Request
  const expectedKey = Deno.env.get('CRM_FEED_KEY')
  const providedKey = req.headers.get('X-Api-Key')

  if (!expectedKey || providedKey !== expectedKey) {
    return new Response(
      JSON.stringify({ error: 'unauthorised' }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    )
  }

  try {
    // 2. Initialize Supabase Client (bypassing RLS for server-side read)
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    
    if (!supabaseUrl || !supabaseServiceKey) {
       console.error("Missing Supabase env vars");
       return new Response(JSON.stringify({ error: 'Configuration error' }), { status: 500, headers: { "Content-Type": "application/json" } })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // 3. Read the 'changed_since' parameter
    const url = new URL(req.url)
    const since = url.searchParams.get('changed_since')

    let query = supabase.from('inquiries').select('*')

    if (since) {
      query = query.gte('created_at', since).order('created_at', { ascending: true })
    } else {
      query = query.order('created_at', { ascending: false })
    }
    
    // Limit to 100 records as requested by Vidu CRM
    query = query.limit(100)

    const { data: rows, error } = await query

    if (error) {
      throw error
    }

    // 4. Format for Vidu CRM
    const formattedData = rows.map((r: any) => ({
      id: String(r.id),
      created: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
      updated: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
      name: r.name || 'Unknown',
      company: '',
      email: '',
      phone: r.phone || '',
      city: r.city || '',
      country: 'India',
      products: r.product ? [r.product] : [],
      message: r.zipcode ? `Zipcode: ${r.zipcode}` : ''
    }))

    return new Response(
      JSON.stringify({ data: formattedData }),
      { headers: { "Content-Type": "application/json" } }
    )

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
})
