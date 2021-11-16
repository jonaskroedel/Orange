const Discord = require('discord.js')

module.exports = {
    name: 'play',
    description: 'plays music',

    async execute(message, args) {
        if (!message.member.voice.channel) {
            let msg = await message.reply("Please connect to a voice channel!")
            setTimeout(() => {
                msg.delete()
            }, 2000)
        } else {
            await message.member.voice.channel.join()
            let msg1 = await message.reply(`Joined your channel...`)
            setTimeout(() => {
                msg1.delete()
            }, 2000)
        }
    }
}