const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'del',
    description: 'Clears the `whole` Channel',

    async execute(message, args) {
        if (message.author.hasPermission("MANAGE_CHANNELS")) {
            let channel = message.channel
            let nchannel = await channel.clone()
            setTimeout(() => {
                channel.delete()
            }, 5000)

            await message.reply(`${channel} gets cleared in \`5 seconds\` -> new channel: ${nchannel}`)
        } else {
            await message.channel.send("You don't have enough permissions to execute this command!")
            message.delete()
        }
    }
}