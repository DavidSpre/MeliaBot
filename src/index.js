import { Client, ActivityType } from "discord.js";
import { config } from "./config";
import { getRandomFact } from "./commands/randomFact";
import { waterReply } from "./commands/water";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"],
});

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

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!fact") getRandomFact(message);
  else if (message.content.includes("water")) waterReply(message);
});

client.login(config.DISCORD_TOKEN);
