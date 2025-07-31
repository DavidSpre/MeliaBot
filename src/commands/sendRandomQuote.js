const { generateRandomInteger } = require("../utils/utils");
const { quotes } = require("../utils/quotes");

// pick a random quote from the list, then send it
const sendRandomQuote = function(message) {
    const randomIndex = generateRandomInteger(0, quotes.length);
    message.channel.send(quotes[randomIndex]);
}

module.exports = { sendRandomQuote };