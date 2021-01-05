const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
    name: 'meme',
    description: "M E M E",
    cooldown: 3,
    async execute(message, args) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send(`Getting a **quality meme** for you`);
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`);

                msg.edit(memeEmbed);
            });
    }
}