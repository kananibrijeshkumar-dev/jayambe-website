import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { amount, customer_phone, customer_email, customer_name } = await req.json()
    
    if (!amount) throw new Error('Amount is required')

    const appId = Deno.env.get('CASHFREE_APP_ID')
    const secretKey = Deno.env.get('CASHFREE_SECRET_KEY')
    const env = Deno.env.get('CASHFREE_ENV') || 'PRODUCTION' 

    if (!appId || !secretKey) {
      throw new Error('Cashfree credentials are not configured in Supabase secrets.')
    }

    const baseUrl = env === 'PRODUCTION' 
      ? 'https://api.cashfree.com/pg/orders' 
      : 'https://sandbox.cashfree.com/pg/orders'

    const orderId = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey
      },
      body: JSON.stringify({
        order_amount: amount,
        order_currency: 'INR',
        order_id: orderId,
        customer_details: {
          customer_id: `CUST_${Date.now()}`,
          customer_phone: customer_phone || '9999999999',
          customer_name: customer_name || 'Customer',
          customer_email: customer_email || 'customer@example.com'
        }
      })
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error("Cashfree API Error:", data)
      throw new Error(data.message || 'Error creating Cashfree order')
    }

    return new Response(
      JSON.stringify({ 
        payment_session_id: data.payment_session_id, 
        order_id: data.order_id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
