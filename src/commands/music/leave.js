module.exports = {
    name: 'leave',
    description: 'leaves the voice',

    execute(message) {
        if (message.guild.me.voice.channel) {
            message.guild.me.voice.channel.leave()
        } else message.channel.send(`I am not connected to a voice channel!`)
    }
}