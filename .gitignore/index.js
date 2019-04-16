const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Le couscous c'est bon !");
    console.log("Le bot a bien et connecte");
});

bot.login("NTY3NzE5ODk4MTQzNTIyODQw.XLX4Kw.F3xpi9XtlqpURI-PL7A8fMv0feY");
