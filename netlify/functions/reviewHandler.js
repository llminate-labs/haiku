const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Allow': 'POST, GET', 'Content-Type': 'application/json' }
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
      console.log('POST Request Body:', { haikuId, review, rating, userId }); // Add logging for debugging

      // Verify user purchase
      const purchase = await database.collection('purchases').findOne({ userId, haikuId });
      if (!purchase) {
        return {
          statusCode: 403,
          body: JSON.stringify({ error: 'Review submission is restricted to verified purchasers.' }),
          headers: { 'Content-Type': 'application/json' }
        };
      }

      // Insert review
      const result = await reviews.insertOne({ haikuId, review, rating, userId, date: new Date() });
      console.log('Inserted Review:', result.insertedId); // Existing logging
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Review submitted successfully.' }),
        headers: { 'Content-Type': 'application/json' }
      };
    } else if (event.httpMethod === 'GET') {
      const { haikuId } = event.queryStringParameters || {};
      console.log('GET Request Query Parameters:', { haikuId }); // Add logging for debugging

      const queryResults = await reviews.find({ haikuId }).toArray();
      console.log('Retrieved Reviews:', queryResults); // Existing logging
      return {
        statusCode: 200,
        body: JSON.stringify(queryResults),
        headers: { 'Content-Type': 'application/json' }
      };
    }
  } catch (error) {
    console.error('Error in reviewHandler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to connect to database or internal server error.' }),
      headers: { 'Content-Type': 'application/json' }
    };
  } finally {
    await client.close();
  }
}