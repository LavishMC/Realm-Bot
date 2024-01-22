const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction, client) {
        //This dont seem right but its fine
		await interaction.reply('Pong! ' + (interaction.createdTimestamp - Date.now()) + 'Ms');
	},
};