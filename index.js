const Discord = require('discord.js');
const fetch = require("node-fetch");
const config = require("./config.js");
const client = new Discord.Client();
client.login(config.token);
client.on("ready", () => {
  console.log(`Darren has been forced awake`);
  client.user.setActivity(`Hi! Talk To Me!`);
});

client.on("message", async message => {
if (message.channel.name == "💬〡ai-staff" | message.channel.name == "│〡ai〡👥" | message.channel.name == "💬︴𝙰𝚒" | message.channel.name == "🤖・darren") { //put channel names where bot will work here
if (message.author.bot) return;
let bid = config.bid
let key = config.key
let uid = message.author.id
let msg = message.content
if (!message.content) return message.channel.send("Please say something! I am lonely!");
fetch(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${msg}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.cnt}`);
    });
      
}
});
