const { Perms } = require('../Validation/Permissions');
const { Client } = require('discord.js');

/**
 * @param {Client} client
 */
module.exports = async (client, PG, Ascii) => {
    const Table = new Ascii("Command Loaded");

    CommandsArray = [];

    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if (!command.name)
            return Table.addRow(file.split("/")[7], "Failed", "⛔ Missing a name.")

        if (!command.type && !command.description)
            return Table.addRow(command.name, "Failed", "⛔ Missing a description.")

        if (command.permission) {
            if (Perms.includes(command.permission))
                command.defaultPermission = false;
            else
                return Table.addRow(command.name, "Failed", "⛔ Permission invalid.")
        }

        client.commands.set(command.name, command);
        CommandsArray.push(command);

        await Table.addRow(command.name, "✅ Succesful");
    });

    console.log(Table.toString());

    client.on("ready", async () => {
        setInterval(() => {
            client.guilds.cache.forEach((g) => {
                g.commands.set(CommandsArray)
            })
        }, 10000)
    })
}