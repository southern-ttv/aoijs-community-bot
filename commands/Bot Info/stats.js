module.exports = ({
  name: "botstats",
  aliases: ["bot","stats"],
  usage: "\`+botstats\`",
  description: "Shows all info of the bot.",
  category: "BotInfo",
  code: `$title[My Stats]
$addField[> __Package Info__:;**- aoi.js:** **\`v$packageVersion\`**
**- dbdjs.db:** **\`$djsEval[require('dbdjs.db').version;yes]\`**
**- Node.js:** **\`$djsEval[process.version;yes]\`**
**- @$username[$clientID]:** **\`v1.0.0\`**;yes]
$addField[> __CPU INFO__:;**- CPU Usage:** **\`$cpu%\/100%\`**
**- Ram Usage:** **\`$ramMB\/512MB\`**
**- CPU Model:** **\`$djsEval[require('os').cpus()[0].model;yes]\`**
**- CPU Speed:** **\`$djsEval[require('os').cpus()[0].speed;yes] MHZ\`**
**- Architecture:** **\`$djsEval[process.arch;yes] BIT\`**
**- Core:** **\`$djsEval[require('os').cpus().length;yes] Core\`**
**- OS:** **\`$djsEval[require('os').platform();yes]\`**;yes]
$addField[> __Normal Stats__:;**• Name:** **\`$username[$clientID]\`**
**• ID:** **\`$clientID\`**
**• Owner:** **\`$userTag[746113176885657701]\`**
**• Contributor:** **\`$userTag[742945200082780160]\`**
**• Prefix:** \"**\`$getServerVar[prefix]\`**\"
**• Server:** **\`$serverCount\`**
**• Number of users:** **\`$allMembersCount\`**
**• Created At:** **\`$creationDate[$clientID]\`**
**• Joined At:** **\`$memberJoinedDate[$clientID]\`**
**• Uptime:** **\`$uptime\`**
**• Commands:** **\`$commandsCount\`**;yes]
$footer[Requested By $username;$userAvatar[$authorID]]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]`
});
