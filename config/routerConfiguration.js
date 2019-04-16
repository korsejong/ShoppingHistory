const index = require('../routes/index');
const userList = require('../routes/data_list/user');
const itemList = require('../routes/data_list/item');
const orderList = require('../routes/data_list/order');
const userManagement = require('../routes/data_management/user');
const itemManagement = require('../routes/data_management/item');
const orderManagement = require('../routes/data_management/order');

module.exports = app => {
    app.use('/', index);
    app.use('/list/users', userList);
    app.use('/list/items', itemList);
    app.use('/list/orders', orderList);
    app.use('/management/users', userManagement);
    app.use('/management/items', itemManagement);
    app.use('/management/orders', orderManagement);
}