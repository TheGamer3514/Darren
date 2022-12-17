const Discord = require('discord.js');
const fetch = require("node-fetch");
const config = require("./config.js");
const client = new Discord.Client();
client.login(config.token);
client.on("ready", () => {
  console.log(`Darren has been forced awake`);
  client.user.setActivity(`Human Chat Simulator`);
});
const express = require('express')
const app = express()
const port = 25708

app.get('/', (req, res) => {
  res.send('Hello World! Darren is the best!')
})

app.listen(port, () => {
  console.log(`Darren Website @ https://darren.sillydev.co.uk`)
})
client.on("message", async message => {
if (message.channel.id == 936309442612441109 | message.channel.id == 1028052690883854376 | message.channel.id == 1030482298526765106 | message.channel.id == 1030900448036663399) { // Replace Current Channel Ids With Your Own! These channels are where darren will work.
if (message.author.bot) return;
let bid = config.bid
let key = config.key
let uid = message.author.id
let msg = message.content
let noresponse = "I Do Not Seem To Understand! I Only Understand Text!\n*If You Only Sent Text Then Report This To Gamer3514#7679*"
if (!message.content) return message.channel.send(`:christmas_tree: Merry Christmas! Stay Safe Out There! :christmas_tree: \n<@${message.author.id}> ${noresponse}`);
fetch(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${msg}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`:christmas_tree: Merry Christmas! Stay Safe Out There! :christmas_tree: \n > ${message.content} \n <@${message.author.id}> ${data.cnt}`);
    });
      
}
});
