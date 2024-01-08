const { Events, Routes } = require('discord.js');

// REALM MODERATION

// DISCORD MODERATION

// MISC
const ping = require('./misc/ping');
const purge = require('./misc/purge');

module.exports = {
    async registerCommands(client, rest) {
        const commands = [
            ping,
            purge,
        ];

        const commandData = [
            ping.data,
            purge.data,
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
            command.execute(interaction);
        });
    }
};