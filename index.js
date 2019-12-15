const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjU1NDMwMTExODc2ODc0Mjcx.XfT-7A.H4QGBDzLKZpfk6tqeraLDwLvb6Q';
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume};
const broadcast = client.createVoiceBroadcast();

var PREFIX = '|';
var version = '1.0.1'
var volume = 5

bot.on('ready', () =>{
    console.log('This Bot Is Online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('Pong!')
        break;
        
        case 'clear':
            if(!args[1]) return message.reply('Error please define the command!')
            message.channel.bulkDelete(args[1]);
        break;

        case 'info':
            const embed = new Discord.RichEmbed()
            .setTitle("Josh's Slave")
            .setColor(0x7289DA)
            .addField('Prefix:', PREFIX,)
            .addField('Version:', version)
            .addField('Employed In:', message.guild.name, true)
            .addField('Developer:', '@Joshh#0922', true)
            .setThumbnail("https://cdn-images-1.medium.com/max/1600/1*n4-mfREc-TgooqGwu2YHnw.png")
            .setFooter("Josh's Slave Since 2019")
            message.channel.sendEmbed(embed);
        break;
        
        case 'prefix':
            if(!args[1]){ return message.reply('You need to tell me what to listen for!')} else{
            PREFIX = args[1];
            message.channel.sendMessage('The prefix is now: ' + PREFIX);
            };
        break;

        case 'play':
            if(!args[1]){ return message.reply('I need a URL!')} else{
            voiceChannel.join().then(connection => {const stream = ytdl(msgArgs[1], { filter: 'audioonly'});
            broadcast.playStream(stream);
            const dispatcher = connection.playBroadcast(broadcast);
        }).catch(console.error)};
        break;

        case 'volume':

            if(!args[1]) return message.channel.sendMessage('Must be between 1-10')

            if(args[1] = 1).then(volume = 1)
            if(args[1] = 2).then(volume = 2)
            if(args[1] = 3).then(volume = 3)
            if(args[1] = 4).then(volume = 4)
            if(args[1] = 5).then(volume = 5)
            if(args[1] = 6).then(volume = 6)
            if(args[1] = 7).then(volume = 7)
            if(args[1] = 8).then(volume = 8)
            if(args[1] = 9).then(volume = 9)
            if(args[1] = 10).then(volume = 10);

        break;
    }
})



bot.login(process.env.BOT_TOKEN);