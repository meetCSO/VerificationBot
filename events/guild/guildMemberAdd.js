const message = require('./message');

module.exports = (Discord, client, member) => {
	var channel = client.channels.cache.get('906056492766097421'); //Channel id for verification

	if (!channel) return;

	member.roles.add('906081086226972675'); //Role id for unverified

	//Create and send embed
	const welcomeEmbed = new Discord.MessageEmbed()
		.setColor('#304281')
		.setTitle('Rules')
		//.setURL('www.csoesu.org')
		.setDescription('Please read the rules below for access to the server.')
		.addFields(
			{ name: 'Rule 1:', value: 'Must be an ESU student.' },
			{ name: 'Rule 2:', value: 'Must have valid @live.esu.edu email' },
			{
				name: 'Rule 3:',
				value: 'Must be verified (Check DM from Verification Bot)',
			}
		)
		.setFooter(
			'If you have any questions, please use the !help command, or ask an Admin for help.'
		);

	channel.send('Welcome to our server <@' + member.user.id + '>!.');
	channel.send({ embeds: [welcomeEmbed] });

	const verifyEmbed = new Discord.MessageEmbed()
		.setColor('#304281')
		.setTitle('Verification Process')
		.setDescription('Please follow the steps below for access to the server.')
		.addFields(
			{
				name: 'Step 1:',
				value:
					'Begin the verification process with !verify command followed by your real first and last name, and email - all seperated by spaces.',
			},
			{
				name: 'Step 2:',
				value: 'You will be sent a verification code to the provided email.',
			},
			{ name: 'Step 3:', value: 'Reply with the code.' }
		)
		.setFooter(
			'If you have any questions, please use the !help command, or ask an Admin for help.'
		);

	member.send({ embeds: [verifyEmbed] });

	//save when user was added member.joindate()
};
