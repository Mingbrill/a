const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('핑퐁!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};