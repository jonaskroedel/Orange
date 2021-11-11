const Discord = require('discord.js')
const Config = require('../../../config.json')


module.exports = {
    name: 'spam',
    description: 'spamming a certain user',

    async execute(message, args) {
        let userm = message.mentions.members.first()
        if (userm.id !== Config.owner) {
            await message.reply(`Success ${userm} will now be spammed!`)
            let amount = parseInt(args[0])
            if (amount > 100 || amount < 1) return message.channel.send("Please select a number *between* 99 and 10")
            for (let i = 0; i < amount; i++) {
                setTimeout(async () => {
                    await userm.send(`knecht`)
                }, 1000)
            }
            message.delete()
        } else message.reply("You can't spam the owner from this bot!")
    }
}