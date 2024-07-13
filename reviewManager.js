document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');
  const recentReviewList = document.getElementById('recentReviewList');

  // Star rating functionality
  let selectedRating = 0;
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
      selectedRating = this.getAttribute('data-value');
      document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      for (let i = 1; i <= selectedRating; i++) {
        document.querySelector(`.star[data-value='${i}']`).classList.add('active');
      }
    });
  });

  reviewForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    if (selectedRating === 0) {
      alert('Please select a rating.');
      return;
    }
    try {
      const response = await fetch('/.netlify/functions/reviewHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          haikuId: 'currentHaikuId', // This should be dynamically set based on the haiku being viewed
          review: reviewText,
          rating: selectedRating,
          userId: 'currentUserId' // This should be set after user authentication
        })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Review submitted successfully.');
        loadReviews();
        loadRecentReviews();
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

  async function loadRecentReviews() {
    try {
      const response = await fetch('/.netlify/functions/reviewHandler?haikuId=currentHaikuId', {
        method: 'GET'
      });
      const reviews = await response.json();
      recentReviewList.innerHTML = '';
      reviews.slice(-5).forEach(review => {
        const li = document.createElement('li');
        li.textContent = `${review.rating} stars - ${review.review}`;
        recentReviewList.appendChild(li);
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load recent reviews.');
    }
  }

  loadReviews();
  loadRecentReviews();
});