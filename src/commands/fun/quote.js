module.exports = {
	name: 'quote',
	description: 'Cito uma linha filosofica.',
	execute(message, args) {
		let arr = ["An eye for an eye will make the world demand for more Ray Bans. - Ghandi",
        "Lazy people fact #2347827309018287. You were too lazy to read that number.",
        "Maldito Huevo! - Gato das botas",
        "Common sense is like deodorant, those who need it the most never use it.",
        "Don’t make me laugh, I’m trying to be mad at you.",
        "Today, I laughed until my abs started hurting, so I can skip the gym."]
        let resposta = Math.floor(Math.random() * arr.length);

        message.channel.send(arr[resposta]);

	},
};