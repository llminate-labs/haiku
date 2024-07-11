const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Allow': 'POST' }
    };
  }

  try {
    const { items, currency } = JSON.parse(event.body);
    const sanitizedItems = items.map(item => ({ id: String(item.id).replace(/[^\w\s]/gi, '') }));
    const sanitizedCurrency = String(currency).replace(/[^a-zA-Z]/g, '');

    const host = event.headers.host;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: sanitizedItems.map(item => ({
        price_data: {
          currency: sanitizedCurrency,
          product_data: {
            name: item.id
          },
          unit_amount: 2000
        },
        quantity: 1
      })),
      mode: 'payment',
      success_url: `https://${host}/success`,
      cancel_url: `https://${host}/cancel`
    });

    // Send email receipt
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'customer-email@example.com',
      subject: 'Haiku Purchase Confirmation',
      text: `Thank you for your purchase! Here are the details:\nHaiku: ${item.id}\nTransaction ID: ${session.id}\nAmount Paid: $20\nDate: ${new Date().toLocaleDateString()}`
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create session' })
    };
  }
};