require('dotenv').config();
const { registerCommands } = require('./commands/index');
const { Client, Events, GatewayIntentBits, REST } = require('discord.js');
const { Authflow } = require('prismarine-auth');
const { RealmAPI } = require('prismarine-realms');
// const bedrock = require('bedrock-protocol')
// const BedrockClient = bedrock.createClient({
//     //host: 'localhost',   // optional
//     //port: 19132,         // optional, default 19132
//     //username: 'MisledWater79',   // the username you want to join as, optional if online mode
//     //offline: false,
//     realms: {
//         pickRealm: (realms) => realms.find(e => e.name.includes('5FS')) // Connect the client to a Realm using a function that returns a Realm
//     }
// })

const authflow = new Authflow()
const api = RealmAPI.from(authflow, 'bedrock')

// Returns a list of Realms the authenticating account has joined or owns.
await api.getRealmWorldDownload('rYxeADNoE6s','0').then((val )=>{console.log(JSON.stringify(val))})

const xboxAuth = await authenticate(process.env.EMAIL, process.env.PASWORD);
const client = new Client({ intents: [ GatewayIntentBits.Guilds ]});
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

registerCommands(client, rest);

client.once(Events.ClientReady, args => {
    console.log(`✅ ${args.user.tag} is online.`);
});

client.login(process.env.TOKEN);