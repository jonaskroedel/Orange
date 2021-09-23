module.exports = {
    name: 'ban',
    description: 'Bans mentioned member.',
    async execute(message) {
        let banm = message.mentions.members.first()
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            if (banm.id !== message.author.id) {
                if (!banm.bannable) message.channel.send(`${banm.user} is not bannable.`)
            }
            if (banm.id === message.author.id) message.channel.send(`You can't ban yourself!`)
            if (banm.bannable) {
                await banm.ban()
                message.channel.send(`${banm.user} got successfully banned!`)
            } else {
                let msg2 = await message.channel.send("You don't have enough permissions to execute this command!")
                setTimeout(() => {
                    msg2.delete()
                    message.delete()
                }, 2000)
            }
        }
    }
}
