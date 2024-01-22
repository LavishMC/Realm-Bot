const { Events, Routes } = require('discord.js');

// REALM MODERATION
//const addRealm = require('./realm-mod/add-realm');
const realms = require('./realm-mod/realms');

// DISCORD MODERATION

// MISC
const ping = require('./misc/ping');
const purge = require('./misc/purge');

module.exports = {
    async registerCommands(client, rest) {
        const commands = [
            ping,
            purge,
            //addRealm,
            realms,
        ];

        const commandData = [
            ping.data,
            purge.data,
            //addRealm.data,
            realms.data,
        ];

        try {
            console.log('Started refreshing application (/) commands.');
      
            await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commandData });
      
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }

        client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isChatInputCommand()) return;

            const command = commands.find((command)=>command.data.name == interaction.commandName);
            command.execute(interaction, client);
        });
    }
};