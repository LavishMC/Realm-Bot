const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('realms')
		.setDescription('Show Realms you have access to!'),
	async execute(interaction, client) {
        let realms = await client.api.getRealms();
        let fields = [];
        for(const realm of realms){
            console.log(JSON.stringify(realm))
            fields.push({name: realm.name.replace(/§./g, '').replace(/[^\x00-\xFF]/g, '').trim(), value: `${realm.state == "CLOSED" ? ':red_circle:' : ':green_circle:'} ${realm.state}`})
        }
        fields = fields.sort((a,b) => {
            if (a.name[0] < b.name[0]) return -1;
            else if (a.name[0] > b.name[0]) return 1;
            return 0;
        });
		await interaction.reply({embeds: [new EmbedBuilder().addFields(fields)], ephemeral: true });
	},
};
/*

    {
        "id": 18655725,
        "remoteSubscriptionId": "4af276e985dc4d918ae87dc19ca3d9c2",
        "owner": "",
        "ownerUUID": "2535432867807860",
        "name": "MisledWater79's Realm",
        "motd": "",
        "defaultPermission": "MEMBER",
        "state": "OPEN",
        "daysLeft": 44,
        "expired": false,
        "expiredTrial": false,
        "gracePeriod": false,
        "worldType": "NORMAL",
        "players": null,
        "maxPlayers": 2,
        "minigameName": null,
        "minigameId": null,
        "minigameImage": null,
        "activeSlot": 2,
        "slots": null,
        "member": false,
        "clubId": 3379897743520309,
        "subscriptionRefreshStatus": null
    },
     */