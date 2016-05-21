var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "potato")
		mybot.reply(message, "Potatos are amazing!");
});

mybot.loginWithToken("token");
