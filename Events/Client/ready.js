const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../src/config.json");

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    execute(client) {
        console.log("Client is now ready!")
        client.user.setActivity(`over ${client.users.cache.size} users`, { type: "WATCHING" })
        console.log(`${client.guilds.cache.size} servers | ${client.users.cache.size} users`) 

        if (!Database) return;
        mongoose.connect(Database, {
            useNewURLParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Client is now connected to the database!")
        }).catch((err) => {
            console.log(err)
        });
    }
}