module.exports = {
	name: 'invite',
    description: 'Sends the bots invite link',
	run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setDescription(oneLine`
        Click [here](INVITELINKHERE)
        to invite me to your server!
      `)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
