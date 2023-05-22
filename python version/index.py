import discord
import requests
import json
from pathlib import Path
path = Path(__file__).with_name('config.json')
#Load Config
with path.open('r') as f:
  data = json.load(f)
  for c in data['botConfig']:
        token = c['bottoken']
intents = discord.Intents.all()
client = discord.Client(intents=intents, activity=discord.Activity(name="Booting..."), help_command=None)
@client.event
async def on_ready():
    print('Darren has been forced awake')
    await client.change_presence(activity=discord.Game(name='Human Chat Simulator'))
@client.event
async def on_message(message):
    channel_ids = [936309442612441109, 1028052690883854376, 1030482298526765106, 1056562316864393367, 1030900448036663399]
    if message.channel.id in channel_ids:
        try:
            if message.author.bot:
                return
            bid = c['bid']
            key = c['key']
            uid = message.author.id
            msg = message.content
            noresponse = "I Do Not Seem To Understand! I Only Understand Text!\n*If You Only Sent Text Then Report This To Gamer3514#7679*"
            errorembed = discord.Embed(title="Darren - Error", description="An Error Has Occured! Please try again later!", color=discord.Color.red())
            if 'ping' in message.content:
                return await message.channel.send(f'🏓 Pong : `{round(client.latency * 1000)}ms`')
            if not message.content:
                await message.channel.send(f'<@{message.author.id}> {noresponse}')
                return
            response = requests.get(f'http://api.brainshop.ai/get?bid={bid}&key={key}&uid={uid}&msg={msg}')
            data = response.json()
            await message.channel.send(f'> {message.content}\n<@{message.author.id}> {data["cnt"]}')
        except Exception as error:
            print("API error:", error)
            await message.channel.send(embed=errorembed)
client.run(token)