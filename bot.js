    
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

console.log("Ready to level up!");

try {
  client.on("message", async message => {
    const prefix = config.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    

    if (command === "spam") {
      var count = 5; // Number of messages sent (modified by sendSpamMessage)
      var maxMessages = 100000000000000; // Change based on how many messages you want sent

      function sendSpamMessage() {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future moderation bots from detecting that you sent a spam message.
        message.channel.send("This is spam message #" + count);

        if (count < maxMessages) {
          // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
          // channel just for bot spamming, you can remove the below line and the entire prune com
          message.channel.send("/prune");
          count++;

          /* These numbers are good for if you want the messages to be deleted.
           * I've also noticed that Discord pauses for about 4 seconds after you send 9
           * messages in rapid succession, and this prevents that. I rarely have any spam
           * messages slip through unless there is a level up from mee6 or Tatsumaki.
           * Mileage may vary based on internet speed. */
          let minTime = Math.ceil(2000);
          let maxTime = Math.floor(4350); // Arbitrary integer
          let timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
          setTimeout(sendSpamMessage, timeToWait);
        } else {
          // Sends a message when count is equal to maxMessages. Else statement can be
          // modified/removed without consequence.
          message.channel.send("------------------");
          message.channel.send("I AM FINISHED!!!");
          message.channel.send("------------------");
        }
      }

      message.delete().catch(O_o=>{})
      sendSpamMessage();
    }

    if (command === "prune") {
      message.channel.fetchMessages()
      .then(messages => {
        let message_array = messages.array();
        message_array.length = 2;
        message_array.map(msg => msg.delete().catch(O_o => {}));
       });
    }
  });
} catch (error) {
  console.error("CAUGHT ERROR: " + error);
}


const say = JSON.parse(fs.readFileSync('./say.json' , 'utf8'));
//Perfect Say Code
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setSay")) {
    let filter = m => m.author.id === message.author.id;
    let role;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| Please Type The Role Required To Type The Say Command ... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
   
        .then(collected => {
            collected.first().delete();
            role = collected.first().content;
            let replymsg;
            msg.edit(':scroll: **| Now Please Type The Answer If He Dont Have The Required Role ... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    replymsg = collected.first().content;
                    msg.edit('✅ **| Successfully Setup !...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                   
      let embed = new Discord.RichEmbed()
      .setTitle('**Done The Say Code Has Been Setup**')
      .addField('Say Role:', `${role}`)
      .addField('Say Role Reply:', `${replymsg}`)
      .addField('Requested By:', `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`)
      .setColor('RANDOM')
      say[message.guild.id] = {
      onoff: 'On',
      sayembed: 'On',
      reply: replymsg,
      sayrole: role
      },
      message.channel.sendEmbed(embed)
      fs.writeFile("./say.json", JSON.stringify(say), (err) => {
      if (err) console.error(err)
    })
      })
    })
   })
 })
})
   }})
   
   client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'embedsay')) {
    if(say[message.guild.id].onoff === 'Off') return;
    if(say[message.guild.id].sayembed === 'Off') return;
    let staff = message.guild.member(message.author).roles.find('name' , `${say[message.guild.id].sayrole}`);
    if(!staff) return message.channel.send(`${say[message.guild.id].replymsg}`)    
let embed = new Discord.RichEmbed()
.setDescription(args)
message.channel.sendEmbed(embed)
}})
 
     
client.on('message', message => {
 
  if(message.content.startsWith(prefix + "toggleSay")) {
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!say[message.guild.id]) say[message.guild.id] = {
        onoff: 'Off'
      }
        if(say[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Say Is __𝐎𝐍__ !**`), say[message.guild.id].onoff = 'On']
        if(say[message.guild.id].onoff === 'On') return [message.channel.send(`**The Say Is __𝐎𝐅𝐅__ !**`), say[message.guild.id].onoff = 'Off']
        fs.writeFile("./say.json", JSON.stringify(say), (err) => {
          if (err) console.error(err)
          .catch(err => {
            console.error(err);
        });
          });
        }
       
      })
     
      client.on('message', message => {
 
        if(message.content.startsWith(prefix + "toggleEmbed")) {
            if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
            if(!say[message.guild.id]) say[message.guild.id] = {
              embed: 'Off'
            }
              if(say[message.guild.id].sayembed === 'Off') return [message.channel.send(`**The Say Embed Is __𝐎𝐍__ !**`), say[message.guild.id].sayembed = 'On']
              if(say[message.guild.id].sayembed === 'On') return [message.channel.send(`**The Say Embed Is __𝐎𝐅𝐅__ !**`), say[message.guild.id].sayembed = 'Off']
              fs.writeFile("./say.json", JSON.stringify(say), (err) => {
                if (err) console.error(err)
                .catch(err => {
                  console.error(err);
              });
                })
              }
             
            })
 
 
            client.on('message', message => {
 
        if (message.author.bot) return;
     
        if (!message.content.startsWith(prefix)) return;
     
     
        let command = message.content.split(" ")[0];
     
        command = command.slice(prefix.length);
     
     
        let args = message.content.split(" ").slice(1);
let embed = new Discord.RichEmbed()
.setTitle(args)
     
     
        if (command === "say") {
         
          if(say[message.guild.id].onoff === 'Off') return;
          let staff = message.guild.member(message.author).roles.find('name' , `${say[message.guild.id].sayrole}`);
          if(!staff) return message.channel.send(`${say[message.guild.id].replymsg}`)      
                message.delete()
                if(!say[message.guild.id].sayembed === 'On') return message.sendEmbed(say)
                message.channel.sendMessage(args)
        }})
     
client.on('message', message => {
  if(message.content.startsWith(prefix + "infoSay")) {
let embed = new Discord.RichEmbed()
.addField('Say Status', `${say[message.guild.id].onoff}`)
.addField('Say Role:', `${say[message.guild.id].sayrole}`)
.addField('Say Embed Status:', `${say[message.guild.id].embed}`)
.addField('Requested By', `${message.author}`)
.setThumbnail('https://a.top4top.net/p_10555ubbl1.png')
.setImage(message.author.avatarURL)
.setFooter(`${client.user.username}`)
.setColor('RANDOM')
message.channel.sendEmbed(embed)
  }})
  
       
          
    


client.login(process.env.BOT_TOKEN);

