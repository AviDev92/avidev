
const Discord = require("discord.js");
const client = new Discord.Client();
const Prefix = '[DEV by Avidev]'

var prefixcmd = "^"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({game:{name:"DEV[d!help]",type :0}});
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply(Prefix+'Pong!');
  }
});
client.on('message', msg => {
    if (msg.content === '!html/css') {
        msg.author.send(Prefix+'HTML:Langage de balisage utilisé pour la création de pages web, permettant notamment de définir des liens hypertextes.');
        msg.author.send(Prefix+"Le CSS permet d'insérer des styles sur un code HTML ou XHTMl et donc permet de définir très précisément le comportement de chaque élément de la page.");
        msg.author.send('https://pastebin.com/08vV5s7e TUTO DE BASE');
      msg.delete();
    }
  });

  client.on('message', msg => {
    if (msg.content === '!javascript') {
        msg.author.send(Prefix+" JavaScript est un langage de programmation couramment utilisé dans le développement Web .");
       
    
      msg.delete();
    }
  });
  client.on('message', msg => {
    if (msg.content === 'd!help') {
        var help_emmbed =new Discord.RichEmbed()
        .setColor('#01DFD7')
        .addField(":tada:Voila les commandes :","```d!help``` \n``` ping``` \n``` !javascript``` \n ```!html/css ```\n ```ASUIVRE```")
        msg.author.sendEmbed(help_emmbed);
       
    
      msg.delete();
    }
  });


client.login('NDk0NDg0NTk1OTg3ODQxMDM0.Do1EhA.zcXAZqcDgWyZp7_G9IjmLzTCv2E');
