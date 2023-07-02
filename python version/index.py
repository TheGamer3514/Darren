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
client = discord.Client(intents=intents, activity=discord.Activity(name="Slowly Booting..."), help_command=None)
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
            if '<@' in message.content:
                return await message.reply('Please Do Not Ping People!',mention_author=True)
            noresponse = "I Do Not Seem To Understand! I Only Understand Text!\n*If You Only Sent Text Then Report This To Gamer3514*"
            if 'ping' == message.content:
                return await message.reply(f'🏓 Pong : `{round(client.latency * 1000)}ms`',mention_author=True)
            if not message.content:
                return await message.reply(noresponse,mention_author=True)
            response = requests.get(f'http://api.brainshop.ai/get?bid={bid}&key={key}&uid={uid}&msg={msg}')
            data = response.json()
            await message.reply(f'{data["cnt"]}',mention_author=True)
        except Exception as error:
            errorembed = discord.Embed(title="Darren - Error", description="An Error Has Occured! Please try again later!\n*If This Error Persists Then Report This To Gamer3514*", color=discord.Color.red())
            print("API error:", error)
            await message.reply(embed=errorembed,mention_author=True)
client.run(token)