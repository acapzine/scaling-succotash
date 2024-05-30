const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("activedevbadge")
    .setDescription("Run this command to get the illustrious [Active Developer Badge]!")
    .once(true),
  async execute(interaction) {
    await interaction.reply({ content: "Wait ~24 hours to gain access to the badge [here](https://discord.com/developers/active-developer)!", ephemeral: true });
  }
};
