module.exports = {
    name: 'leave',
    description: 'leaves the voice',

    async execute(message) {
        if (message.guild.me.voice.channel) {
            message.guild.me.voice.channel.leave()
            let msg = await message.reply(`Left your channel...`)
            setTimeout(() => {
                msg.delete()
            }, 2000)
        } else {
            let msg1 = await message.reply(`I am not connected to a voice channel!`)
            setTimeout(() => {
                msg1.delete()
            }, 2000)
        }
    }
}