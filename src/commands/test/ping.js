const Discord = require('discord.js')
const Config = require('../../../config.json')

module.exports = {
    name: 'ping',
    description: 'Sends the latency from this bot in `ms`',

    async execute(message, args) {
        const msg = await message.channel.send('Pinging...')
        const latency = msg.createdTimestamp - message.createdTimestamp
        msg.edit(`🍊 Bot Latency: \`${latency}ms\``)
        await message.react('🏓')
    }
}