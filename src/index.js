const { Client, ActivityType } = require("discord.js");
const { ReactionRole } = require("discordjs-reaction-role");
const { reactionRoleConfig } = require("./configs/reactionRoleConfig");
const { getRandomFact } = require("./commands/randomFact");
const { waterReply } = require("./commands/water");
const dotenv = require("dotenv");
dotenv.config();

// verify tokens are available
// removed from config.js due to javascript bug
const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error("Missing environment variables");
}

// initialize bot
const client = new Client({
  partials: ["MESSAGE", "REACTION"],
  intents: ["Guilds", "GuildMessages", "GuildMessageReactions", "MessageContent"],
});

// initialize reaction roles
const rr = new ReactionRole(client, reactionRoleConfig);

// set bot to online, watching AoT
client.once("ready", () => {
  console.log("Discord bot is ready! 🤖");
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