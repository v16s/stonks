const meta = {
  name: 'ping',
  description: 'default ping test',
};

const handler = (interaction: any) => {
  interaction.channel.send('pong');
};

export const ping = { meta, handler };
