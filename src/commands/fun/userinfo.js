const Discord = require('discord.js')
const Config = require('../../../config.json')
const moment = require('moment')

module.exports = {
    name: 'userinfo',
    description: 'Sends the userinfo from yourself or mentioned user',

    async execute(message, args) {
        let member = message.mentions.members.first() || message.member,
            user = member.user;
        const sEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Userinfo for ${user.username}`)
            .setThumbnail(user.avatarURL())
            .setDescription(`
                Username: \`${user.username}\` Discriminator: \`#${user.discriminator}\`
                Since **${moment.utc(member.joinedAt).format('DD.MM.YY')}** on \`${message.guild}\`
                Account created on **${moment.utc(user.createdAt).format('DD.MM.YY')}**
                ${user.bot ? 'User is a `bot`' : 'User is `not a bot`'}
                ${member.hasPermission("ADMINISTRATOR") ? 'User is `Administrator`' : 'User is `no Administrator`'}
                \n
                Support me with the bot via: [\`paypal.me/jonaskroedel\`](https://paypal.me/jonaskroedel)`)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp()
        message.channel.send(sEmbed)
    }
}