'use strict';

// Client Login
const key = "";
client.login(key);

const Discord = require('discord.js');
const client = new Discord.Client();
const {
    Client,
    MessageEmbed
} = require('discord.js');

// Ready confirmation
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Message Triggers
client.on('message', msg => {

    // --- Functionality ---
    // Information
    if (msg.content.toLowerCase() === 'info') {

        const embed = new MessageEmbed()
            .setTitle('Karl Marx Info')
            .setColor(0xff0000)
            .setDescription('This is info for the bot');

        message.channel.send(embed);
    }
    // Ping Pong Check
    if (msg.content.toLowerCase().includes('ping')) {
        msg.channel.send("Pong");
    }

});