require('dotenv').config();
const { Client, ActivityType } = require("discord.js");
const { ReactionRole } = require("discordjs-reaction-role");
const { reactionRoleConfig } = require("./configs/reactionRoleConfig");
const { getRandomFact } = require("./commands/randomFact");
const { waterReply } = require("./commands/water");

// verify tokens are available
// removed from config.js due to javascript bug
// TODO: outsource?
const { 
  DISCORD_TOKEN, 
  DISCORD_CLIENT_ID, 
  SERVER_ID, 
  CHANNEL_ROLES_ID, 
  MESSAGE_PRONOUNS_ID, 
  MESSAGE_PINGABLE_ID 
} = process.env;

if (
  !DISCORD_TOKEN || 
  !DISCORD_CLIENT_ID || 
  !SERVER_ID || 
  !CHANNEL_ROLES_ID || 
  !MESSAGE_PRONOUNS_ID || 
  !MESSAGE_PINGABLE_ID
) {
  throw new Error("Missing environment variables");
}

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
    const guild = await client.guilds.fetch(SERVER_ID);
    const channel = await guild.channels.fetch(CHANNEL_ROLES_ID);

    // fetch both messages
    await channel.messages.fetch(MESSAGE_PRONOUNS_ID);
    await channel.messages.fetch(MESSAGE_PINGABLE_ID);
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
client.login(DISCORD_TOKEN);

// stop the bot when the process is closed (via Ctrl-C).
const destroy = () => {
  rr.teardown();
  client.destroy();
};
process.on("SIGINT", destroy);
process.on("SIGTERM", destroy);