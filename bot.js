
const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const bot = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك



bot.on('guildMemberAdd', member => {
   bot.channels.get('598500448537804812').send(member.id); 
   bot.channels.get('598500448537804812').send("Hi boys !!@#!@3"); 
});



 bot.on('message', message => {
    
const args = message.content.slice(prefix.length).split(' ');
   if (message.content.startsWith(prefix + "say")) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return ;
  
  message.channel.send(`${args[1]}`);
   }
});


bot.login(process.env.BOT_TOKEN);
    




