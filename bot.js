const botconfig = require("./botconfigs.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const embed = new Discord.RichEmbed;

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
  });

  bot.on("message", async message => { 
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let Owners = ["424451779523117057", "287526190447591424"];

    if(cmd ===`${prefix}accept`) {
      if(message.author.id !== `${Owners}`) return;
      let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      embed.setColor("#14d310")
      embed.setTitle("**Congrats !**")
      embed.setDescription("Congrats you have been Accepted on GDT Clan ! Have a great time with us :wink:")

      aUser.send(embed);


    }

  });