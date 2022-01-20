const Discord = require('discord.js')
const Config = require('../../../config.json')

module.exports = {
    name: 'repo',
    description: 'Sends github repo link',

    async execute(message, args) {
        await message.channel.send("https://github.com/jonaskroedel/orange/")
    }
}