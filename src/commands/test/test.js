const Discord = require('discord.js')
const Config = require('../../../config.json')

module.exports = {
    name: 'spam',
    description: 'spamming a certain user',

    async execute(message, args) {
        let userm = message.mentions.members.first()
        let amount = parseInt(args[0])
        let i = 0;

        if (userm.id === Config.owner) return message.reply("You can't spam the owner from this bot!")
        if (userm.id === message.author.id) return message.channel.send("You can't spam yourself!")
        if (amount > 100 || amount < 1) return message.channel.send("Please select a number *between* 99 and 10!")

        await message.reply(`Success ${userm} will now be spammed!`)
        message.react("👍")

        while (i <= amount) {
            setTimeout(async () => {
                await userm.send(`spam`)
            }, 5000)
            i++
        }
    }

}