const Alpaca = require("@alpacahq/alpaca-trade-api");
const _ = require("lodash");
const SMA = require("technicalindicators").SMA;
const alpaca = new Alpaca({
    keyId: process.env.ALPACA_API_KEY_ID,
    secretKey: process.env.ALPACA_API_SECRET_KEY,
    paper: true
  });

  let sma20, sma50;
