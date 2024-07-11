document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');

  reviewForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const rating = document.getElementById('rating').value;

    try {
      const response = await fetch('/.netlify/functions/reviewHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          haikuId: 'currentHaikuId', // This should be dynamically set based on the haiku being viewed
          review: reviewText,
          rating: rating,
          userId: 'currentUserId' // This should be set after user authentication
        })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Review submitted successfully.');
        loadReviews();
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit review.');
    }
  });

  async function loadReviews() {
    try {
      const response = await fetch('/.netlify/functions/reviewHandler?haikuId=currentHaikuId', {
        method: 'GET'
      });
      const reviews = await response.json();
      reviewList.innerHTML = '';
      reviews.forEach(review => {
        const li = document.createElement('li');
        li.textContent = `${review.rating} stars - ${review.review}`;
        reviewList.appendChild(li);
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load reviews.');
    }
  }

  loadReviews();
});