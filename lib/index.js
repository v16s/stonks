"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
var discord_js_1 = require("discord.js");
var actions_1 = __importDefault(require("./actions"));
var discord_slash_commands_client_1 = require("discord-slash-commands-client");
var yf = require('yahoo-finance');
var client = new discord_js_1.Client();
client.interactions = new discord_slash_commands_client_1.Client(process.env['TOKEN'], process.env['CLIENT_ID']);
// attach and event listener for the ready event
client.on('ready', function () {
    console.log('Client is ready!');
    // Create a new command that we can test
    Object.values(actions_1.default).map(function (_a) {
        var meta = _a.meta;
        client.interactions
            .createCommand(meta)
            .catch(console.error)
            .then(console.log);
    });
});
// attach and event listener for the interactionCreate event
client.on('interactionCreate', function (interaction) {
    actions_1.default[interaction.name].handler(interaction, { yf: yf });
});
// login
client.login(process.env['TOKEN']);
