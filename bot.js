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


client.login(process.env.BOT_TOKEN);
