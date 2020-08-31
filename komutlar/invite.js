const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ("737659451212824576") //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLACK')
        .setTitle(`${client.user.username} `)
        .setDescription(`Add bot for support us`)
        .setThumbnail(client.user.avatarURL)
        .addField(`Invite Link `, ` [Click here for invite](https://discord.com/api/oauth2/authorize?client_id=747788812553551913&permissions=8&scope=bot)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekle','davett','eekle','davet-et','davets'],
  permLevel: 0,
};

exports.help = {
  name: 'invite',
  description: '',
  usage: ''
};