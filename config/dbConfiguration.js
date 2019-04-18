const mongoose = require('mongoose');
const defaultUri = 'mongodb://127.0.0.1:27017/shoppinghistory';
const defaultOptions = {
    useCreateIndex : true,
    useNewUrlParser : true
};

module.exports = (uri, options) => {
    uri = uri || defaultUri;
    options = options || defaultOptions;
    // mongoose의 기본 promise(mPrimise)를 Node.js의 promise로 교체
    mongoose.Promise = global.Promise;
    // mongoose.set('debug', true);
    mongoose.connect(uri,  options);
};
