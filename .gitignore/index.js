const Discord = require("discord.js");

var PREFIX = "!";

const bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Le couscous, c'est bon !");
    console.log("Le bot a bien et connecte");
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
});

bot.on("message", async function(message) {
    if (message.auhor.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("Test");
        break;
    }
});

bot.login(process.env.TOKEN);
