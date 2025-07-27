const https = require("https");
const factURL = "https://nekos.life/api/v2/fact";

const getRandomFact = async function(message) {
  https.get(`${factURL}`, (data) => {
    data.on("data", (chunk) => {
      let Fact = JSON.parse(chunk.toString());
      message.channel.send(Fact.fact);
    });
    data.on("error", (err) => {
      console.error(`Error: ${err}`);
      message.channel.send("Something went wrong, please try again.");
    });
  });
}

module.exports = { getRandomFact };