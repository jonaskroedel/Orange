const Discord = require('discord.js')
const got = require('got')

module.exports = {
    name: 'reddit',
    description: 'Sends a random meme from [\`reddit.com/r/memes\`](https://reddit.com/r/memes) or r/`subreddit`',

    async execute(message, args) {
        message.react('📝')
        let msg1
        let subreddit = message.content
        let sub = subreddit.slice(9)
        if (!sub) sub = `meme`

        const sEmbed = new Discord.MessageEmbed()
        let link = `https://www.reddit.com/r/${sub}/random.json`
        got(link)
            .then(response => {
                const [list] = JSON.parse(response.body)
                const [post] = list.data.children
                sEmbed.setTitle(`${post.data.title}`)
                sEmbed.setDescription(post.data.selftext)
                sEmbed.setURL(`${post.data.url}`)
                sEmbed.setColor('RANDOM')
                sEmbed.setImage(post.data.url)
                sEmbed.setFooter(`⬆️${post.data.ups}      🗨️${post.data.num_comments}`)
                sEmbed.setTimestamp()

                message.channel.send(sEmbed)
            })
            .catch(e => {
                    console.error(e)
                    message.reply(`${sub} does not exist. What the heck is this?`)
                        .then(msg => {
                            setTimeout(() => msg.delete(), 2000)
                        })
                    message.delete()
                }
            )
    }
}