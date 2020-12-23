"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.price = void 0;
var meta = {
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
var handler = function (interaction, _a) {
    var yf = _a.yf;
    interaction.channel.send("Fetching price for " + interaction.content);
    var prom = new Promise(function (resolve, reject) {
        yf.quote({
            symbol: interaction.content,
            modules: ['price'],
        }, function (err, data) {
            if (err)
                reject(err);
            resolve(data);
        });
    });
    prom
        .catch(function (e) {
        interaction.channel.send('Send a proper symbol dumbass');
    })
        .then(function (_a) {
        var _b = _a.price, regularMarketPrice = _b.regularMarketPrice, currencySymbol = _b.currencySymbol;
        interaction.channel.send("" + currencySymbol + regularMarketPrice);
    });
};
exports.price = { handler: handler, meta: meta };
