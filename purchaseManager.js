// Stripe.js is assumed to be included in the HTML

// Initialize Stripe with your public key
const stripe = Stripe('pk_test_51Pb9NOLZgqEfYlW4o8CrZyF3h4hPSHkrgokgOj46kGOifWzfiNYS7Og6DfRFPsbkpIcA3uVcDotxDWyFesmlfIC200gq1yTISs');

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
        currency: 'usd',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel'
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