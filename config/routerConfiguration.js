const index = require('../routes/index');
const userList = require('../routes/data_list/user');
const itemList = require('../routes/data_list/item');
const orderList = require('../routes/data_list/order');
const userManagement = require('../routes/data_management/user');
const itemManagement = require('../routes/data_management/item');
const orderManagement = require('../routes/data_management/order');

module.exports = app => {
    app.use('/', index);
    app.use('/list/user', userList);
    app.use('/list/item', itemList);
    app.use('/list/order', orderList);
    app.use('/management/user', userManagement);
    app.use('/management/item', itemManagement);
    app.use('/management/order', orderManagement);
}