module.exports = {
    name: 'ban',
    description: 'Bans a member, mod only, reason needed.',
    args: true,
    async execute(message, args) {
        if (message.member.permissions.has('BAN_MEMBERS')) {
            const member = message.mentions.users.first();
            banReason = args.splice(1,50000).join(" ")
                if (member) {
                    const memberTarget = message.guild.members.cache.get(member.id);
                    memberTarget
                      .ban({
                        reason: `${banReason}`,
                      })
                      .then(() => {
                        message.channel.send(`Successfully banned the user`);
                      })
                      .catch(err => {
                        message.channel.send(`I was unable to ban the member \n${err}`);
                        console.error(err);
                      });
                  } else {
                message.channel.send('You need to mention a member to ban.')
            }
        } else {
            message.reply('you are missing the permissions: `BAN_MEMBERS');
        }
    },
};