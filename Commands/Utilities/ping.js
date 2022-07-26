const { Client, MessageEmbed, CommandInteraction } = require("discord.js");
const { Color, Green, Red, Yellow } = require("../../src/config.json");

module.exports = {
    name: "ping",
    description: "Discord Bot Ping",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const embed = new MessageEmbed()
            .setColor(Color)
            .setDescription(`**Ping:** \`${Date.now() - interaction.createdTimestamp}ms\``)
        interaction.reply({ embeds: [embed], ephemeral: true })
    }

}
