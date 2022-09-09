const Quote = require("../models/quote.model");

function getRandomQuote(req, res, next) {
  const randomQuote = await Quote.getRandomQuote();
  res.json({
    quote: randomQuote
  });
}

module.exports = {
  getRandomQuote: getRandomQuote,
};
