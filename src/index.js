const { Client, ActivityType } = require("discord.js");
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
  intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"],
});

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
