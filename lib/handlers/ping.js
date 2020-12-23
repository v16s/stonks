"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
var meta = {
    name: 'ping',
    description: 'default ping test',
};
var handler = function (interaction) {
    interaction.channel.send('pong');
};
exports.ping = { meta: meta, handler: handler };
