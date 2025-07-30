const { EmbedBuilder } = require('discord.js');
const MELIA_PINK = `#DA86FF`;
const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

// Create and send embed for reaction roles
// Embed creation can be factored out into separate function if more would be used
const sendEmbed = function(message) {
    try {
        // extract title and description from message
        // uses a regex for case insensitivity with "summon embed " without changing the rest 
        const embedInput = message.toString().split(new RegExp(regEscape("summon embed "), "ig"))[1];
        const [title, description] = embedInput.split(",");
        const embed = new EmbedBuilder()
            .setColor(MELIA_PINK)
            .setTitle(title)
            .setDescription(description);
    
        message.channel.send({ embeds: [embed] });
    } catch(error) {
        message.channel.send("Something went wrong, please try again.");
        console.error(error);
    }
}

module.exports = { sendEmbed };