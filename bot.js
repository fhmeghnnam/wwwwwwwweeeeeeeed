const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const bot = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك

bot.on('guildMemberAdd', member => {
   bot.channels.get('598500448537804812').send(member.id); 
   bot.channels.get('598500448537804812').send("Hi boys !!@#!@3"); 
});

bot.on('message', message => {
var spam = false;
if (message.content === 'spam') {
    if (message.author.id !== bot.user.id) { // Replace bot with the instance of your bot Client.
        spam = true;
    } else {
        if(spam) {
            message.channel.send('spam');
        }
    }
    if (message.content === 'stop spam') {
        if(spam) {
            message.channel.send('stopped');
        }
        spam = false;
    }
}
});

bot.login(process.env.BOT_TOKEN);

