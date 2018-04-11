const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/trade_your_trade';
mongoose.Promise = Promise;
const connection = mongoose.connect(MONGODB_URI);
module.exports = connection;
connection.DELETE = () => mongoose.connection.dropDatabase()
