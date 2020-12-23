const meta = {
  name: 'evaluate',
  description: 'lol',
  options: [
    {
      name: 'command',
      description: 'Command to run',
      type: 3,
      default: false,
      required: true,
    },
  ],
};

const handler = async (interaction: any, { yf }: any) => {
  interaction.channel.send('sure hope you know what youre doing');
  eval(interaction.content);
};

export const evaluate = { handler, meta };
