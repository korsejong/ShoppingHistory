const router = require('express').Router();
const User = require('../models/user');
const Item = require('../models/item');
const Order = require('../models/order');

router.get('/', async (req, res) => {
    let users = await User.findAll();
    let items = await Item.findAll();
    let orders = await Order.findAll().populate('item').populate('user');
    res.render('index', {
        users: users,
        items: items,
        orders: orders
    });
});

module.exports = router;
