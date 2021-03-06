const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'help',
    description: 'Sends this page and all `commands`',

    execute(message, args) {
        let client = message.client
        const sEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Help Page for : ${message.guild.name}`)
            .setDescription(`
                                    **${config.prefix}${require('../moderation/help.js').name}** ${require('../moderation/help.js').description}
                                     
                                    **${config.prefix}${require('../test/ping.js').name}** ${require('../test/ping.js').description} 
                                    **${config.prefix}${require('../fun/meme.js').name}** ${require('../fun/meme.js').description} 
                                    **${config.prefix}${require('../fun/userinfo.js').name}** ${require('../fun/userinfo.js').description} 
                                    **${config.prefix}${require('../moderation/clear.js').name}** ${require('../moderation/clear.js').description} 
                                    **->** ${message.member.hasPermission("MANAGE_MESSAGES") ? '`you can execute this command!`' : "`you can't execute this command!`"}
                                    **${config.prefix}${require('../moderation/clearChannel.js').name}** ${require('../moderation/clearChannel.js').description} 
                                    **->** ${message.member.hasPermission("MANAGE_MESSAGES") ? '`you can execute this command!`' : "`you can't execute this command!`"}
                                    
                                    **${config.prefix}${require('../moderation/kick.js').name}** ${require('../moderation/kick.js').description} 
                                    **->** ${message.member.hasPermission("KICK_MEMBERS") ? '`you can execute this command!`' : "`you can't execute this command!`"}
                                    **${config.prefix}${require('../moderation/ban.js').name}** ${require('../moderation/ban.js').description} 
                                    **->** ${message.member.hasPermission("BAN_MEMBERS") ? '`you can execute this command!`' : "`you can't execute this command!`"}
                                     
                                    **${config.prefix}${require('../music/play.js').name}** ${require('../music/play.js').description} 
                                    **${config.prefix}${require('../music/leave.js').name}** ${require('../music/leave.js').description} 
                                    
                                    \n
                                    Bot made by <@521023008706658304>
                                    Support me with the bot via: [\`paypal.me/jonaskroedel\`](https://paypal.me/jonaskroedel)`)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp()
        message.channel.send(sEmbed)
        message.delete()


    }
}