const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1};

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const queue = new Map();

module.exports = {
	name: 'play',
	description: 'Da play de um video de yt *Nao funciona*',
	execute(message, args) {
        const url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
        let voiceChannel = message.guild.channels.cache.find(channel => channel.id === '822234971925512208');
		// const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send("I can't find you in any voice channel!");

        voiceChannel.join().then(connection => {
            const stream = ytdl(url,{ filter : 'audioonly'});
            const dispatcher = connection.play(stream, streamOptions);

            dispatcher.on('end', () =>{
                voiceChannel.leave();
            })
        })

        
	}
};