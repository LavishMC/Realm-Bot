const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Purge Chat')
        .addNumberOption(option => 
            option.setName('count')
                .setDescription('How many messages to delete')
                .setMinValue(1)),
	async execute(interaction) {
        const count = interaction.options.getNumber('count');
        const channel = await interaction.guild.channels.fetch(interaction.channelId);
        channel.bulkDelete(count);
        await interaction.reply({ content: `Deleted ${count} messages`, ephemeral: true });
	},
};