const Discord = require('discord.js')
const Config = require('../../../config.json')

module.exports = {
    name: 'github',
    description: 'Sends the latency from this bot in `ms`',

    async execute(message, args) {
        await message.channel.send("https://github.com/jonaskroedel/orange/")
    }
}