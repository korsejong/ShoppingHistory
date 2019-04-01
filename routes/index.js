const router = require('express').Router();
const User = require('../models/user');
const Item = require('../models/item');

router.get('/', async (req, res) => {
    let users = await User.findAll().populate('orderItems.item');
    let items = await Item.findAll();
    res.render('index', {
        users: users,
        items: items
    });
});

module.exports = router;
