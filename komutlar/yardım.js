const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
	   .setAuthor('Rainbow Bot')
    .setDescription("/set-speed = Set the change speed.\n/set-role = Set the rainbow role.\n/reset-settings = Reset the settings.\n/start = start the rainbow role.\n/stop = Stop the chaning roles.")
    .addField('Links', `[invite bot](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=805314622)`)
    .setColor("BLACK")
       .addField('Rainbow Bot Varmı?',  message.guild.members.has("747788812553551913") ? '\nBu sunucuda Rainbow Bot var!' : 'Yok davet etmek için [tıkla!](https://discordapp.com/oauth2/authorize?client_id=445645030359826452&scope=bot&permissions=805314622)')
    .setThumbnail(client.user.avatarURL)
    return message.channel.send(embed);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım', 'komutlar', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};