const Discord = require('discord.js');
const db = require('quick.db');  
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxODA4MjQ5MzkyODA0NjcwNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkyNzc3MjA2fQ.hXMjyXNnoHR8Oxb-h6wyuvTVxxRThuUUc1kzs1n3xss', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.channel.send( new Discord.RichEmbed()
.setTitle("WARNING")
.setColor("BLACK")
.setFooter(client.user.username)
.setThumbnail(client.user.avatarURL)
.setDescription("You need vote for use this command!")
.addField("Click for vote:", `[Click here](https://top.gg/bot/718082493928046705/vote)`)
)
        } else {

exports.run = async (client, msg, args) => {
   let pre = args.slice(0).join(' ');
      if (!pre[0]) {
       msg.channel.send("Write number between 1-10") 
  }
   
       if (pre === '1') {
        msg.channel.send('Speed set `1`')
         db.set(`dhiz_${msg.guild.id}`, '1')
       }
  if (pre === '2') {
        msg.channel.send('Speed set `2`')
      db.set(`dhiz_${msg.guild.id}`, '2')
       }
   if (pre === '3') {
        msg.channel.send('Speed set `3`')
       db.set(`dhiz_${msg.guild.id}`, '3')
       }
   if (pre === '4') {
        msg.channel.send('Speed set `4`')
       db.set(`dhiz_${msg.guild.id}`, '4')
       }
   if (pre === '5') {
        msg.channel.send('Speed set `5`')
       db.set(`dhiz_${msg.guild.id}`, '5')
       }
   if (pre === '6') {
        msg.channel.send('Speed set `6`')
       db.set(`dhiz_${msg.guild.id}`, '6')
       }
   if (pre === '7') {
        msg.channel.send('Speed set `7`')
       db.set(`dhiz_${msg.guild.id}`, '7')
       }
   if (pre === '8') {
        msg.channel.send('Speed set `8`')
       db.set(`dhiz_${msg.guild.id}`, '8')
       }
   if (pre === '9') {
        msg.channel.send('Speed set `9`')
       db.set(`dhiz_${msg.guild.id}`, '9')
       }
   if (pre === '10') {
        msg.channel.send('Speed set `10`')
       db.set(`dhiz_${msg.guild.id}`, '10')
       }
 if (pre === "sıfırla") {
   msg.channel.send("Disko Hızı Sıfırlandı")
 db.delete(`dhiz_${msg.guild.id}`)
 }
}  
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'set-speed',
  description: '',
  usage: ''
};