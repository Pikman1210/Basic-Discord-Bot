module.exports = {
	name: 'invite',
    description: 'Sends the bots invite link',
	execute(message, args) {
		message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=779798400584515594&permissions=8&scope=bot`)
	},
};