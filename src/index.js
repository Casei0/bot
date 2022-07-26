require('dotenv').config();
const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767, partials: ['CHANNEL'] });
const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require("ascii-table");

client.commands = new Collection();

module.exports = client;

["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});

client.login(process.env.Token);