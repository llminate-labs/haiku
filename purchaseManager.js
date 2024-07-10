document.getElementById('buyHaikuBtn').addEventListener('click', function() {
  // Simulate a payment gateway integration
  const paymentConfirmed = confirm('Do you want to proceed with the payment?');
  if (paymentConfirmed) {
    alert('Payment successful! Thank you for your purchase.');
  } else {
    alert('Payment cancelled.');
  }
});