// Stripe.js is assumed to be included in the HTML

// Initialize Stripe with your public key
const stripe = Stripe('your-public-key');

document.getElementById('buyHaikuBtn').addEventListener('click', async function() {
  try {
    // Create a checkout session on your server
    const session = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [{ id: 'haiku1' }],
        currency: 'usd'
      })
    }).then(res => res.json());

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      alert(result.error.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to start the payment process.');
  }
});