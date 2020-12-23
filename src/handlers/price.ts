const meta = {
  name: 'price',
  description: 'exactly what it says, fucking idiot',
  options: [
    {
      name: 'symbol',
      description: 'Symbol',
      type: 3,
      default: false,
      required: true,
    },
  ],
};

const handler = (interaction: any, { yf }: any) => {
  interaction.channel.send(`Fetching price for ${interaction.content}`);
  const prom = new Promise((resolve, reject) => {
    yf.quote(
      {
        symbol: interaction.content,
        modules: ['price'], // see the docs for the full list
      },
      (err: any, data: any) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
  prom
    .catch((e) => {
      interaction.channel.send('Send a proper symbol dumbass');
    })
    .then(({ price: { regularMarketPrice, currencySymbol } }: any) => {
      interaction.channel.send(`${currencySymbol}${regularMarketPrice}`);
    });
};

export const price = { handler, meta };
