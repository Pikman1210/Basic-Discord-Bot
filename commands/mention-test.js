module.exports = {
	name: 'mention-test',
	description: 'Mention testing',
	execute(message, args) {
		// grab the "first" mentioned user from the message
		// this will return a `User` object, just like `message.author`
		if (!message.mentions.users.size) {
			return message.reply('you need to mention someone');
		}
		const taggedUser = message.mentions.users.first();
	
		message.channel.send(`You mentioned: ${taggedUser.username}`);
	},
};