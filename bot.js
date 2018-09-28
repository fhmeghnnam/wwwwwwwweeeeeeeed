const Discord = require('discord.js');
const client = new Discord.Client();
const dot = new Discord.Client();
const Canvas = require("canvas-prebuilt");
const jimp = require("jimp");
const fs = require('file-system');
const moment = require('moment');
const prefix = "-";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var ServerID = "482342402217082901"; //اي دي السيرفر
var ChannelID = "495207854555267072";// اي دي الروم

/*	
 
Codes server - !.Zeyad' , ♚Roýale#5555


                                                                                                            
                                                                                                            
  ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 
                                                                                                            
                                                                                                            

		
__________              __________        __   
\______   \_______  ____\______   \ _____/  |_ 
 |     ___/\_  __ \/  _ \|    |  _//  _ \   __\
 |    |     |  | \(  <_> )    |   (  <_> )  |  
 |____|     |__|   \____/|______  /\____/|__|  
                                \/             

_________                    .___.__  __          
\_   ___ \_______   ____   __| _/|__|/  |_  ______
/    \  \/\_  __ \_/ __ \ / __ | |  \   __\/  ___/
\     \____|  | \/\  ___// /_/ | |  ||  |  \___ \ 
 \______  /|__|    \___  >____ | |__||__| /____  >
        \/             \/     \/               \/ 
Codes server - !.Zeyad' , ♚Roýale#5555


   _____  .__                     
  /     \ |__| ____   ___________ 
 /  \ /  \|  |/    \_/ __ \_  __ \
/    Y    \  |   |  \  ___/|  | \/
\____|__  /__|___|  /\___  >__|   
        \/        \/     \/       


*/
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);
// Codes server - !.Zeyad' , ♚Roýale#5555


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login("NDc3Nzg2NTY0NjUxMzg0ODM0.DoU1Eg.fHDZ-_paacExaC0WUNLftK6Gxzk");
client.login(process.env.BOT_TOKEN);
