const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const client = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك



client.on('ready',async () => {
378652303881797632


    client.channels.find(ch => ch.id === "583914171951743034" && ch.type === 'voice').join();
    
  });
	
	

client.login(process.env.BOT_TOKEN);
