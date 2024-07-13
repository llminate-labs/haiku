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
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).not.toBeNull(); // Additional check for non-null 'id'
    console.log('Checkout Session ID:', response.body.id); // Add logging for debugging
  });

  it('should retrieve reviews correctly via GET', async () => {
    const response = await request.get('/.netlify/functions/reviewHandler?haikuId=haiku1');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach(review => {
      expect(review).toHaveProperty('review'); // Additional check for 'review' property
      expect(review).toHaveProperty('rating'); // Additional check for 'rating' property
    });
    console.log('Retrieved Reviews:', response.body); // Add logging for debugging
  });
});