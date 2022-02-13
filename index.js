const Discord = require('discord.js')
const client = new Discord.Client()
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);

const prefix = '-'

client.on("ready", () => {
    console.log("Bot is online")
    client.user.setActivity("-together"); 
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'together') {

    if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    if(!message.member.voice.channel)
    {
      return message.channel.send(`You must be on the voice channel to use this command`);
    }
        
  }

});


client.login('bot token');
