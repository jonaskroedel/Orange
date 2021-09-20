const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'help',
    description: 'List all of my commands.',

    execute(message, args) {
        let client = message.client

        const sEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Help Page for : ${message.guild.name}`)
            .setDescription(`**${config.prefix}help** - Shows this Page 
                                    **${config.prefix}ping** - Shows the Latency from the \`Bot\`
                                    **${config.prefix}meme** - Sends a random Meme from [\`Reddit.com/r/memes\`](https://reddit.com/r/memes)
                                    **${config.prefix}clear** + \`number between 100 and 1\` clears number of messages in the channel` )
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp()
        message.channel.send(sEmbed)
        message.delete()
    }
}