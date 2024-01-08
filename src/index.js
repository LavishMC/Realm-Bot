require('dotenv').config();
const { registerCommands } = require('./commands/index');
const { Client, Events, GatewayIntentBits, REST } = require('discord.js');

const client = new Client({ intents: [ GatewayIntentBits.Guilds ]});
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
registerCommands(client, rest);

client.once(Events.ClientReady, args => {
    console.log(`✅ ${args.user.tag} is online.`);
});

client.login(process.env.TOKEN);