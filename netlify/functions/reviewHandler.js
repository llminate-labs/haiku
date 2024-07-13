const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Allow': 'POST, GET' }
    };
  }

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('haikuReviews');
    const reviews = database.collection('reviews');

    if (event.httpMethod === 'POST') {
      const { haikuId, review, rating, userId } = JSON.parse(event.body);
      // Verify user purchase
      const purchase = await database.collection('purchases').findOne({ userId, haikuId });
      if (!purchase) {
        return {
          statusCode: 403,
          body: JSON.stringify({ error: 'Review submission is restricted to verified purchasers.' })
        };
      }

      // Insert review
      await reviews.insertOne({ haikuId, review, rating, userId, date: new Date() });
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Review submitted successfully.' })
      };
    } else if (event.httpMethod === 'GET') {
      const { haikuId } = event.queryStringParameters ? JSON.parse(event.queryStringParameters) : {};
      const queryResults = await reviews.find({ haikuId }).toArray();
      console.log('Retrieved Reviews:', queryResults); // Add logging for debugging
      return {
        statusCode: 200,
        body: JSON.stringify(queryResults)
      };
    }
  } catch (error) {
    console.error('Error in reviewHandler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to connect to database or internal server error.' })
    };
  } finally {
    await client.close();
  }
};