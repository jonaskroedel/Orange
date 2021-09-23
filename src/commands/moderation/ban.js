

module.exports = {
    name: 'ban',
    description: 'Bans mentioned member.',
    async execute(message) {
        let banm = message.mentions.members.first()
        if (banm.id !== message.author.id) {
            if (!banm.bannable) message.channel.send(`${banm.user} is not bannable.`)
        }
        if (banm.id === message.author.id) message.channel.send(`You can't ban yourself!`)
        if (banm.bannable) {
            await banm.ban()
            message.channel.send(`${banm.user} got successfully banned!`)

        }
    }
}
