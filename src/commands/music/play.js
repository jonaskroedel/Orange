module.exports = {
    name: 'play',
    description: 'plays music',

    execute(message) {
        if(!message.member.voice.channel) {
            message.channel.send("Please connect to a voice channel!")
        } if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            message.member.voice.channel.join()
        } else message.member.voice.channel.join()
    }
}

