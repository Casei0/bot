const { MessageEmbed, CommandInteraction } = require("discord.js");
const { Color, Red, Green, Yellow } = require("../../src/config.json");

module.exports = {
    name: "avatar",
    description: "Displays a user's Avatar",
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
