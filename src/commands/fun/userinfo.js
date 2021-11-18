const Discord = require('discord.js')
const Config = require('../../../config.json')
const moment = require('moment')

module.exports = {
    name: 'userinfo',
    description: 'Sends the userinfo from yourself',

    async execute(message, args) {
        let member = message.mentions.members.first() || message.member,
            user = member.user;
        const sEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Userinfo for ${user.username}`)
            .setThumbnail(user.avatarURL())
            .setDescription(`
                Since ${moment.utc(member.joinedAt).format('DD.MM.YY')} on \`${message.guild}\`
                \n
                Support me with the bot via: [\`paypal.me/jonaskroedel\`](https://paypal.me/jonaskroedel)`)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp()
        message.channel.send(sEmbed)
    }
}