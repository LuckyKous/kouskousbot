const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Le couscous, c'est bon !");
    console.log("Le bot a bien et connecte");
});

bot.login(process.env.TOKEN);
