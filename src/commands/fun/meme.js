const Discord = require('discord.js')
const got = require('got')

module.exports = {
    name: 'meme',
    description: 'Sends a random meme from https://reddit.com/r/memes',

    async execute(message, args) {
        message.react('📝')

        const sEmbed = new Discord.MessageEmbed()
        got(`https://www.reddit.com/r/meme/random.json`)
            .then(response => {
                const [list] = JSON.parse(response.body)
                const [post] = list.data.children

                sEmbed.setTitle(`${post.data.title}`)
                sEmbed.setURL(`${post.data.url}`)
                sEmbed.setColor('RANDOM')
                sEmbed.setImage(post.data.url)
                sEmbed.setFooter(`⬆️${post.data.ups}     🗨️${post.data.num_comments}`)
                sEmbed.setTimestamp()

                message.channel.send(sEmbed)
            })
            .catch(console.error)
    }
}
