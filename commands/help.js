module.exports = {
	name: 'help',
	description: 'The help command',
	execute(message, args) {
		message.channel.send('My commands are: `~args-info` `~avatar` `~help` `~invite` `~mention-test` `~ping` `~prune`');
	},
};