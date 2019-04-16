const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');

module.exports = app => {
    app.use('/api/users', userController);
    app.use('/api/items', itemController)
};