const { Events } = require('discord.js');

module.Exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
}
