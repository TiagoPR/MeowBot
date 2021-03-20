// This one doesn't work so well

const cheerio = require('cheerio');
const request = require('request');

module.exports = {
	name: 'meow',
	description: 'Envia a imagem de um gato fofo,meme ou grumpy!!',
	execute(message, args) {
        let num = Math.floor(Math.random() * 3);

        let arr = ['cute cats','cat meme','grumpy cat'];

        image(message,arr[num-1]);

	}
};

function image(message,srch){
    var options = {
        url: 'http://results.dogpile.com/serp?qc=images&q=' + srch,
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            'User-Agent': 'Chrome'
        }
        
    };
    request(options, function(error, response, responseBody){
        if (error){
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $('.image a.link');
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));
        console.log(urls);
        if (!urls.length){
            return;
        }
        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });
}