const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Pb6HtRxUlNo5otWaZ2o56ykA"+
"IszWsvwVUphWbyGJDFZdUQ2dVbjQWy2wcsW3orEQrXvGcBKn9Kssa6WQLf6uiBT00nw3fK6sm");

// API

// App config
const app = express();
// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(`Payment request received for amount: ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);
