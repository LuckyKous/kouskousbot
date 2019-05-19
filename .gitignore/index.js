const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  bot.user.setGame("Les carottes c'est bon pour la santé !");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '$help') {
    msg.reply('Commandes :');
    msg.reply('$help : Aide');
  }
});

client.login(process.env.TOKEN);