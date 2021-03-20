module.exports = {
	name: 'server',
	description: 'Server info',
	execute(message, args) {
		message.channel.send(`O nome do server: ${message.guild.name}\nNumero total de membros: ${message.guild.memberCount}`);
	},
};