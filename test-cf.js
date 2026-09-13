const fetch = require('node-fetch');

async function test() {
  const res = await fetch('https://uosqmchlfvvevvdmhozi.supabase.co/functions/v1/create-cashfree-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: 224000,
      customer_phone: 'jayambedrive@gmail.com',
      customer_email: 'jayambedrive@gmail.com',
      customer_name: 'Jayambe Drive'
    })
  });
  const data = await res.json();
  console.log('Status:', res.status);
  console.log('Response:', data);
}
test();
