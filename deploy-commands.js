const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandsFolder = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath);
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      console.warn(`[WARNING] | The "data" & "execute" properties are missing at ${filePath}.`);
    }
  }
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    console.log(`Started refreshing ${commands.length} Application (/) Commands.`);

    const data = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log(`Successfully refreshed ${commands.length} Application (/) Commands.`);
  } catch (err) {
    console.error(err);
  }
})();
