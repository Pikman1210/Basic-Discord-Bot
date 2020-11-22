module.exports = {
	name: 'args-info',
	description: 'Args test',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'mr') {
			return message.channel.send('yeet');
		}
	
		message.channel.send(`First argument: ${args[0]}`);
	},
};