module.exports = {
    name: 'kick',
    description: 'Kicks the `mentioned` member',
    async execute(message) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            let kickm = message.mentions.members.first()
            if (kickm.id !== message.author.id) {
                if (!kickm.kickable) message.channel.send(`${kickm.user} is not kickable.`)
            }
            if (kickm.id === message.author.id) message.channel.send(`You can't kick yourself!`)
            if (kickm.kickable) {
                await kickm.kick()
                message.channel.send(`${kickm.user} got successfully kicked!`)
            }
        } else {
            await message.channel.send("You don't have enough permissions to execute this command!")
            message.delete()
        }
    }
}