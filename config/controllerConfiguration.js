const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');
const orderController = require('../controllers/orderController');

module.exports = app => {
    app.use('/api/users', userController);
    app.use('/api/items', itemController);
    app.use('/api/orders', orderController);
};