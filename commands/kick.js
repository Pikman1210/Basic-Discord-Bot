module.exports = {
    name: 'kick',
    description: 'Kicks a member, mod only',
    args: true,
    async execute(message, args) {
        if (message.member.permissions.has('KICK_MEMBERS')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick()
                    .catch((error) => { message.channel.send(`× Command failed \n${error}`); console.log('Error on kick command:', error); return; })
                message.channel.send(`User has been kicked`);

            } else {
                message.channel.send('You need to mention a member to kick.')
            }
        } else {
            message.reply('you are missing the permissions: `KICK_MEMBERS1');
        }
    },
};