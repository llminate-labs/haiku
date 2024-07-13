const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
 if (event.httpMethod !== 'POST') {
   return {
     statusCode: 405,
     body: JSON.stringify({ error: 'Method Not Allowed' }),
     headers: { 'Allow': 'POST' }
   };
 }

 try {
   const { items, currency } = JSON.parse(event.body);
   // Sanitize input to prevent XSS and SQL injection
   const sanitizedItems = items.map(item => ({ id: String(item.id).replace(/[^\w\s]/gi, '') }));
   const sanitizedCurrency = String(currency).replace(/[^a-zA-Z]/g, '');

   console.log('Sanitized Items:', sanitizedItems); // Add logging for debugging
   console.log('Sanitized Currency:', sanitizedCurrency); // Add logging for debugging

   const host = event.headers.host;
   if (!host) {
     throw new Error('Host header is missing');
   }
   const session = await stripe.checkout.sessions.create({
     payment_method_types: ['card'],
     line_items: sanitizedItems.map(item => ({
       price_data: {
         currency: sanitizedCurrency,
         product_data: {
           name: item.id
         },
         unit_amount: 2000
       },
       quantity: 1
     })),
     mode: 'payment',
     success_url: `https://${host}/success`,
     cancel_url: `https://${host}/cancel`
   });

   console.log('Created Checkout Session:', session.id); // Existing logging

   return {
     statusCode: 200,
     body: JSON.stringify({ id: session.id })
   };
 } catch (error) {
   console.error('Error in creating checkout session:', error);
   return {
     statusCode: 500,
     body: JSON.stringify({ error: 'Failed to create session', details: error.message })
   };
 }
};