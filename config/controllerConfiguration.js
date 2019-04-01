const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');

module.exports = app => {
    app.use('/api/user', userController);
    app.use('/api/item', itemController)
};