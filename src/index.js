import { Client, ActivityType } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";
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

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName]) {
    commands[commandName].execute(interaction);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!fact") getRandomFact(message);
  else if (message.content.includes("water")) waterReply(message);
});

client.login(config.DISCORD_TOKEN);
