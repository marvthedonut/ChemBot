const { MessageEmbed } = require('discord.js')
module.exports = {
  update: (client, updateNum, changes) => {
    var updateEm = new MessageEmbed()
    .setTitle("Update " + updateNum)
    .setDescription("\u200b\n**" + changes.map(change => "- " + change).join("\n") + "**\n\u200b")
    .setFooter("Keep on experimenting!", client.users.cache.get("796480356055777360").displayAvatarURL({ format: "png" }))
    .setTimestamp()
    .setColor(0x68e960)
    client.channels.cache.get("793686033551982642").send(updateEm)
  },
  submissionsMsg: (client) => {
    client.channels.cache.get("797312863563022357").send(
`**Submissions**:
For each submission please fill out the corresponding template with detail. ***Do not contain [] in your final submission***.
**Bug Report Template**: 
> ChemBot Version: [You can check this in #update-log]
> Bug: [Bug]
*Example:*
> ChemBot Version: 1.0.0
> Bug: ChemBot won't give me infinite test tubes!
**Suggestion Template**:
There is no template for suggestion. Just make sure your submission starts with **suggest**
*Example:*
> suggest give me developer`)
  }
}