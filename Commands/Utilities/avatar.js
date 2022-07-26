const { MessageEmbed, CommandInteraction } = require("discord.js");
const { Color, Red, Green, Yellow } = require("../../src/config.json");

module.exports = {
    name: "avatar",
    description: "Displays a user's Avatar",
    usage: "/avatar",
    options: [{
        name: "target",
        description: "Select a user",
        type: "USER",
        required: false,
    }],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const target = interaction.options.getMember('target') || interaction.member;
        await target.user.fetch();

        let bws = client.guilds.cache.get("969358497923874816");
        let clerityrole = bws.roles.cache.get("994834735526326333");
        let member1 = bws.members.cache.get(interaction.user.id);

        const embed = new MessageEmbed()
            .setColor(Color)
            .setTitle(`${target.user.username}'s Avatar`)
            .setImage(target.user.avatarURL({
                dynamic: true,
                size: 1024
            }))
            .setDescription(`[PNG](${target.user.avatarURL({ format: 'png' })}) | [Webp](${target.user.avatarURL({ dynamic: true })}) | [Jpeg](${target.user.avatarURL({ format: 'jpeg' })})`)
            .setFooter(`Requested by: ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }))

        interaction.reply({ embeds: [embed] })
    }

}