const meta = {
  name: 'pltr',
  description: 'To the moon',
};

const handler = async (interaction: any, { yf }: any) => {
  interaction.channel.send('fetching');
  const {
    price: { regularMarketPrice, currencySymbol },
  } = await new Promise((resolve, reject) => {
    yf.quote(
      {
        symbol: 'PLTR',
        modules: ['price'], // see the docs for the full list
      },
      (err: any, data: any) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });

  interaction.channel.send(`${currencySymbol}${regularMarketPrice} 🚀🚀🚀🚀🚀`);
};

export const pltr = { handler, meta };
