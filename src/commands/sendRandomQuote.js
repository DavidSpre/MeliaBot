const { generateRandomInteger } = require("../utils/utils");

const quotes = [
    "Star searing flames of absolution!",
    "By my flesh and blood, be healed!",
    "Feel darkness blacker than midnight!",
    "Even when victory seems impossible… we march on!",
    "Aha! The weak spot!",
    "Oppose me and your destruction is inevitable!",
    "The head! Shoot him in the head!",
    "You have my gratitude.",
    "What doesn't kill you makes you stronger… apparently.",
    "Do not fret, I am with you!",
    "Rest assured that your issue will be attended to with haste!",
    "G-gotcha…friendio! Leave it to us…m-mate!",
    "Seeing you so happy… I know not why, but it makes me feel warm.",
    "Aizel, Hogard, Garan, Damil… I pray that you can see my efforts.",
    "Get your hands off me!",
    "See the future?! And you expect me to believe this rubbish?",
    "I thank you for your aid in my cause. Justice has been served.",
    "You are too kind.",
    "How dare you! You clown!",
    "I cannot speak now. But I shall fulfill my promise.",
    "If I am to lead the High Entia despite my mixed heritage... If I am to succeed the throne, then I accept what must be done.",
    "What trials await me, I wonder? I must not lose focus!",
    "I do not understand. But I do not suspect any falsehood in your words.",
    "I cannot walk outside as you see me now, so this garden gives me much relief.",
    "You're a funny one.",
    "I've seen this engraving around the capital. Many researchers have tried and failed to discover its meaning.",
    "Forefathers. I, your descendant Melia Antiqua, stand before you. For the sake of our world, release the seal!",
    "Don't say that! I don't care how improper it is. Let me cry.",
    "Do not mock me.",
    "If you do not grasp the importance of loved ones until after they are gone... That is simply too late."
]

// pick a random quote from the list, then send it
const sendRandomQuote = function(message) {
    const randomIndex = generateRandomInteger(0, quotes.length);
    message.channel.send(quotes[randomIndex]);
}

module.exports = { sendRandomQuote };