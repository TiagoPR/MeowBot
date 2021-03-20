const { prefix, token} = require('./config.json');

const {Client, Attachment} = require('discord.js');
const Discord = require('discord.js');

const fs = require('fs');
// bot client
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');



client.once('ready' , () => {
    console.log(`${client.user.tag} fez login.`);
    client.user.setActivity('No ginasio');
})

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('message' , message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) 
                    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

    	return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
})













//------------------------------------------------------------------------------------------------------------------

client.login(token);