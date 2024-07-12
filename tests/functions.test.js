const { handler: createCheckoutSession } = require('../netlify/functions/create-checkout-session');
const { handler: reviewHandler } = require('../netlify/functions/reviewHandler');

// Mock environment variables
process.env.STRIPE_SECRET_KEY = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
process.env.MONGODB_URI = 'mongodb://localhost:27017/test';

describe('Function Execution Tests', () => {
  it('should create a checkout session successfully', async () => {
    const session = await createCheckoutSession({ httpMethod: 'POST', body: JSON.stringify({ items: [{ id: 'haiku1' }], currency: 'usd' }) });
    expect(session).toHaveProperty('statusCode', 200);
    const sessionBody = JSON.parse(session.body);
    expect(sessionBody).toHaveProperty('id');
  });

  it('should handle review submission successfully', async () => {
    const result = await reviewHandler({ httpMethod: 'POST', body: JSON.stringify({ haikuId: 'haiku1', review: 'Great haiku!', rating: 5, userId: 'user123' }) });
    expect(result).toHaveProperty('statusCode', 200);
    const resultBody = JSON.parse(result.body);
    expect(resultBody).toHaveProperty('message', 'Review submitted successfully.');
  });
});