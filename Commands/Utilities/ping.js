const { Client, MessageEmbed, CommandInteraction } = require("discord.js");
const { Color, Green, Red, Yellow } = require("../../src/config.json");

module.exports = {
    name: "ping",
    description: "Discord Bot Ping",
    usage: "/ping",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        let bws = client.guilds.cache.get("969358497923874816");
        let clerityrole = bws.roles.cache.get("994834735526326333");
        let member1 = bws.members.cache.get(interaction.user.id);

        const embed = new MessageEmbed()
            .setColor(Color)
            .setDescription(`**Ping:** \`${Date.now() - interaction.createdTimestamp}ms\``)
        interaction.reply({ embeds: [embed], ephemeral: true })
    }

}