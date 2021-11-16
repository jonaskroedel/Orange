const Discord = require('discord.js')
const Config = require('../../../config.json')

module.exports = {
    name: 'ping',
    description: 'Shows the latency from the bot.',

    async execute(message, args) {
        const msg = await message.channel.send('Pinging...')
        const latency = msg.createdTimestamp - message.createdTimestamp
        msg.edit(`🍊 Bot Latency: \`${latency}ms\``)
        await message.react('🏓')
    }
}