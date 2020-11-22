module.exports = {
	name: 'invite',
    description: 'Sends the bots invite link',
	execute(message, args) {
		message.channel.send(`[Invite](INVITELINKHERE)`)
	},
};
