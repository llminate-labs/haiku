const { createCheckoutSession, handleReviewSubmission } = require('../../../netlify/functions/create-checkout-session');
const { reviewHandler } = require('../../../netlify/functions/reviewHandler');

describe('Function Execution Tests', () => {
  it('should create a checkout session successfully', async () => {
    const session = await createCheckoutSession({ items: [{ id: 'haiku1' }], currency: 'usd' });
    expect(session).toHaveProperty('id');
  });

  it('should handle review submission successfully', async () => {
    const result = await handleReviewSubmission({ haikuId: 'haiku1', review: 'Great haiku!', rating: 5, userId: 'user123' });
    expect(result).toHaveProperty('message', 'Review submitted successfully.');
  });
});