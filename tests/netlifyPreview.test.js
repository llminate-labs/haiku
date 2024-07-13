const supertest = require('supertest');

// Assuming the Netlify preview URL is set as an environment variable
const netlifyPreviewUrl = process.env.NETLIFY_PREVIEW_URL;

if (!netlifyPreviewUrl) {
  throw new Error('NETLIFY_PREVIEW_URL environment variable is not set.');
}

const request = supertest(netlifyPreviewUrl);

describe('Netlify Preview URL Integration Tests', () => {
  it('should load the homepage successfully', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<title>Haiku Home</title>');
  });

  it('should handle POST requests to create-checkout-session correctly', async () => {
    const response = await request.post('/.netlify/functions/create-checkout-session')
      .send({ items: [{ id: 'haiku1' }], currency: 'usd' }).set('Accept', 'application/json');
    console.log('Create Checkout Session Response:', response.body); // Add logging for debugging
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(typeof response.body.id).toBe('string');
    expect(response.body.id).not.toBeNull();
  });

  it('should retrieve reviews correctly via GET', async () => {
    const response = await request.get('/.netlify/functions/reviewHandler?haikuId=haiku1');
    console.log('Get Reviews Response:', response.body); // Add logging for debugging
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
      response.body.forEach(review => {
        expect(review).toHaveProperty('review');
        expect(review).toHaveProperty('rating');
        expect(typeof review.review).toBe('string');
        expect(typeof review.rating).toBe('number');
      });
    } else {
      console.log('No reviews found for haiku1'); // Add logging for when no reviews are found
    }
  });
});