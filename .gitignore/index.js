const Discord = require("discord.js");

var PREFIX = "$";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Le couscous, c'est bon !");
    console.log("Le bot a bien et connecte");
});

bot.on("message", async function(message) {
    if (message.auhor.equals(bot.user)) return;

    if(!message.content.startWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("Test");
        break;
    }
});

bot.login(process.env.TOKEN);
