document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const haikuId = urlParams.get('haikuId');
  const transactionId = urlParams.get('transactionId');
  const amount = urlParams.get('amount');
  const date = new Date().toLocaleDateString();

  // Display the purchased haiku
  document.getElementById('purchasedHaiku').textContent = haikus[haikuId];

  // Display transaction details
  document.getElementById('transactionId').textContent = 'Transaction ID: ' + transactionId;
  document.getElementById('transactionAmount').textContent = 'Amount: $' + amount;
  document.getElementById('transactionDate').textContent = 'Date: ' + date;
});