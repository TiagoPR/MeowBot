// This one works wonderfully

const {get} = require("snekfetch");

module.exports = {
	name: 'cat',
	description: 'Envia fotos de gatos aleatorias',
	execute(message, args) {
        try {
            get('https://aws.random.cat/meow').then(response => {
                  message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
                  console.log('random cat picture');
                })
            } 
                catch (e) 
                {
                    console.log('error!');
                }
                
	},
};