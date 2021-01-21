const Database = require('better-sqlite3')
const db = new Database("db.txt")
var verified = ["CMBT","breb"]

module.exports = {
  name: "company",
  description: "Do commands with a company.",
  usage: "<command>",
  aliases: ["c"],
  category: "Fun",
  async execute(message, args, client, Discord, dbl, mongoose, Schemas) {
    switch (args[1] ? args[1].toLowerCase() : undefined) {
      case 'create':
        require("../companys/create.js")(client, message, args, Discord, mongoose, Schemas)
        break;
      default:
      var companys = mongoose.model("companie", Schemas.companies)
        var company = args[1] ? (await companys.find()).find(company => company.name.toLowerCase() == args[1].toLowerCase()) : (await companys.find()).find(company => company.users.includes(message.author.id))
        if (!company) return message.reply("No company found.")
        var members = []
        company.users.forEach(async (user) => members.push(client.users.cache.get(user) ? client.users.cache.get(user).tag : (await client.users.fetch(user)).tag))
        var em = new Discord.MessageEmbed()
          .setTitle((verified.includes(company.name) ? "<:Essential:801549298495389746> " : "") + company.name)
          .setColor(message.member.displayHexColor == "#000000" ? "#68e960" : message.member.displayHexColor)
          .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Owner**: ${(await client.users.fetch(company.owner)).tag}\n\n**Bank**: ${company.bal.toLocaleString()} **test tubes**\n\n**Members**:\n${members.join("\n")}`)
        message.reply(em)
        break
      case 'deposit':
      case 'dep':
      case 'donate':
        require("../companys/deposit.js")(client, message, args, Discord, mongoose, Schemas)
        break;
      case 'withdraw':
      case 'with':
        require("../companys/withdraw.js")(client, message, args, Discord, mongoose, Schemas)
        break;
      case 'leave':
        require("../companys/leave.js")(client, message, args, Discord, mongoose, Schemas)
        break;
      case 'invite':
        require("../companys/invite.js")(client, message, args, Discord, mongoose, Schemas)
        break;
      case 'requests':
        require("../companys/requests.js")(client, message, args, Discord, mongoose, Schemas)
        break;
      case 'help':
        require("../companys/help.js")(client, message, args, Discord, mongoose, Schemas)
        break;
        case 'delete':
        require("../companys/delete.js")(client, message, args, Discord, mongoose, Schemas)
        break;
    }
  }
}