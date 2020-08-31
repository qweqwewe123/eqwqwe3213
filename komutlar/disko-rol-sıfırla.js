const db = require('quick.db')
const Discord = require('discord.js')
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
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You need Manage Roles perm!')
    db.set(`discorol_${message.guild.id}`, 'Disco')
  db.set(`discoid_${message.guild.id}`, 'Disco')
  message.channel.send('Successfully reseted!')
  
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
  name: 'reset-settings',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolinfo <rolismi>'
};