const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const bot = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك

bot.on('guildMemberAdd', member => {
   bot.channels.get('598500448537804812').send(member.id); 
   bot.channels.get('598500448537804812').send("Hi boys !!@#!@3"); 
});


bot.login(process.env.BOT_TOKEN);

