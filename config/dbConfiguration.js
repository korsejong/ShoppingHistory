const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/shoppinghistory';

module.exports = () => {
    mongoose.Promise = global.Promise;
    // mongoose.set('debug', true);
    mongoose.connect(mongoDB,  { useCreateIndex :  true, useNewUrlParser: true });
};