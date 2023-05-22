const Discord = require('discord.js');
const fetch = require("node-fetch");
const config = require("./config.js");
const client = new Discord.Client();
client.login(config.token);
client.on("ready", () => {
  console.log(`Darren has been forced awake`);
  client.user.setActivity(`Human Chat Simulator`);
});
client.on("message", async (message) => {
  if (
    message.channel.id == 936309442612441109 ||
    message.channel.id == 1028052690883854376 ||
    message.channel.id == 1030482298526765106 ||
    message.channel.id == 1056562316864393367 ||
    message.channel.id == 1030900448036663399 
  ) {
    try {
    // Replace Current Channel Ids With Your Own! These channels are where darren will work.
    if (message.author.bot) return;
    let bid = config.bid;
    let key = config.key;
    let uid = message.author.id;
    let msg = message.content;
    let noresponse = "I Do Not Seem To Understand! I Only Understand Text!\n*If You Only Sent Text Then Report This To Gamer3514#7679*";
    let errorresponse = "An Error Has Occured! Please try again later!\n*If This Error Persists Then Report This To Gamer3514#7679*"
    if (message.content.includes(`ping`)) {
		return message.channel.send(`🏓 Pong : \`${Math.floor(message.client.ws.ping)}ms\``);
 	}
    if (!message.content) return message.channel.send(`<@${message.author.id}> ${noresponse}`);
      const response = await fetch(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${msg}`);
      const data = await response.json();
      if (data.cnt.length > 1950) return;
      message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.cnt}`);
    } catch (error) {
      console.error("API error:", error);
      message.channel.send(`<@${message.author.id}> ${errorresponse}`); //send error message

    }
  }
});
