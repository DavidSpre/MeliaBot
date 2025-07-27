// validate all env vars are set - ids and tokens
require('dotenv').config();
require('./configs/config').checkEnvVars();

const { Client, ActivityType } = require("discord.js");
const { ReactionRole } = require("discordjs-reaction-role");
const { getRandomFact } = require("./commands/randomFact");
const { waterReply } = require("./commands/water");
const { reactionRoleConfig } = require("./configs/reactionRoleConfig");
const { config } = require("./configs/config");

// setup bot
const client = new Client({
  partials: ["MESSAGE", "REACTION"],
  intents: ["Guilds", "GuildMessages", "GuildMessageReactions", "MessageContent"],
});

// initialize reaction roles
const rr = new ReactionRole(client, reactionRoleConfig);

// initialize
client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");

  // cache messages for reaction roles
  try {
    const guild = await client.guilds.fetch(config.SERVER_ID);
    const channel = await guild.channels.fetch(config.CHANNEL_ROLES_ID);

    // fetch both messages
    await channel.messages.fetch(config.MESSAGE_PRONOUNS_ID);
    await channel.messages.fetch(config.MESSAGE_PINGABLE_ID);
  } catch (err) {
    console.error("Failed to fetch reaction role messages:", err);
  }

  // appear as online, watching AoT
  if (client.user) {
    client.user.setPresence({
      activities: [
        {
          name: "Attack on Titan",
          type: ActivityType.Watching,
        },
      ],
      status: "online",
    });
  }
});

// react to messages - TODO: outsource into manager?
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === "summon fact") await getRandomFact(message);
  else if (message.content.toLowerCase().includes("water")) waterReply(message);
});

// start process
client.login(config.DISCORD_TOKEN);

// stop the bot when the process is closed (via Ctrl-C).
const destroy = () => {
  rr.teardown();
  client.destroy();
};
process.on("SIGINT", destroy);
process.on("SIGTERM", destroy);