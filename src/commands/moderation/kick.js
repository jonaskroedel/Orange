

module.exports = {
    name: 'kick',
    description: 'Kicks mentioned member',
    async execute(message) {
        let kickm = message.mentions.members.first()
        if (kickm.id !== message.author.id) {
            if (!kickm.kickable) message.channel.send(`${kickm.user} is not kickable.`)
        }
        if (kickm.id === message.author.id) message.channel.send(`You can't kick yourself!`)
        if (kickm.kickable) {
            await kickm.kick()
            message.channel.send(`${kickm.user} got successfully kicked!`)
        }
    }
}