import { config } from 'dotenv';
config();
import { Client } from 'discord.js';
import actions from './actions';
import { Client as SlashClient } from 'discord-slash-commands-client';

const yf: any = require('yahoo-finance');

let client: any = new Client();

client.interactions = new SlashClient(
  process.env['TOKEN'],
  process.env['CLIENT_ID']
);

// attach and event listener for the ready event
client.on('ready', () => {
  console.log('Client is ready!');

  // Create a new command that we can test
  Object.values(actions).map(({ meta }) => {
    client.interactions
      .createCommand(meta)
      .catch(console.error)
      .then(console.log);
  });
});

// attach and event listener for the interactionCreate event
client.on('interactionCreate', (interaction: any) => {
  actions[interaction.name].handler(interaction, { yf });
});

// login
client.login(process.env['TOKEN']);
