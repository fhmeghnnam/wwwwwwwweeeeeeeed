const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const client = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك



client.on('ready',async () => {



    client.channels.find(ch => ch.id === "573490626826600448" && ch.type === 'voice').join();
    clie
  });
	
	

client.login(process.env.BOT_TOKEN);
