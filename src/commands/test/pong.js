module.exports = {
    name: 'beer',
    description: 'fun command',

    async execute(message, args) {
        await message.channel.send('pong!')
        await message.react('🍻')
    }

}