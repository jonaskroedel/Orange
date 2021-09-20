const Discord = require('discord.js')
const {retryAfterStatusCodes} = require("got/dist/source/core/calculate-retry-delay")


module.exports = {
    name: 'ban',
    description: 'lorem',

    async execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const member = new message.mentions.first()
            if (!member.bannable) message.send(`${member} is not bannable`)
            await member.ban()
            await message.send(`${member} successfully banned!`)
        }
    }
}