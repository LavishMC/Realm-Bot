const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addRealm')
		.setDescription('Add a realm to moderate!')
        .addStringOption(option => 
            option.setName("Realm Code")
                .setDescription("Code to the Realm you wish to add!")
                .setRequired(true)),
	async execute(interaction, client) {
        const code = interaction.options.getString('Realm Code');
        //This dont seem right but its fine
		await interaction.reply(``);
	},
};