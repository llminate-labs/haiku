const { handler: createCheckoutSession } = require('../netlify/functions/create-checkout-session');
const { handler: reviewHandler } = require('../netlify/functions/reviewHandler');

// Mock environment variables
process.env.STRIPE_SECRET_KEY = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
process.env.MONGODB_URI = 'mongodb://localhost:27017/test';

jest.mock('stripe', () => () => ({
  checkout: {
    sessions: {
      create: jest.fn().mockResolvedValue({ id: 'mockSessionId' })
    }
  }
}));

jest.mock('mongodb', () => {
  const mockConnect = jest.fn();
  const mockDb = jest.fn(() => ({
    collection: jest.fn(() => ({
      findOne: jest.fn().mockResolvedValue(true),
      insertOne: jest.fn().mockResolvedValue({ insertedId: 'mockId' }),
      find: jest.fn().mockReturnValue({
        toArray: jest.fn().mockResolvedValue([{ review: 'Great haiku!', rating: 5, userId: 'user123' }])
      })
    }))
  }));
  return { MongoClient: jest.fn(() => ({
    connect: mockConnect,
    db: mockDb,
    close: jest.fn()
  })) }
});

jest.setTimeout(60000); // Increase timeout for all tests to handle potential delays

describe('Function Execution Tests', () => {
  it('should create a checkout session successfully', async () => {
    const session = await createCheckoutSession({ httpMethod: 'POST', body: JSON.stringify({ items: [{ id: 'haiku1' }], currency: 'usd' }), headers: { host: 'example.com' } });
    expect(session).toHaveProperty('statusCode', 200);
    const sessionBody = JSON.parse(session.body);
    expect(sessionBody).toHaveProperty('id', 'mockSessionId');
  });

  it('should handle review submission successfully', async () => {
    const result = await reviewHandler({ httpMethod: 'POST', body: JSON.stringify({ haikuId: 'haiku1', review: 'Great haiku!', rating: 5, userId: 'user123' }) });
    expect(result).toHaveProperty('statusCode', 200);
    const resultBody = JSON.parse(result.body);
    expect(resultBody).toHaveProperty('message', 'Review submitted successfully.');
  });
});
