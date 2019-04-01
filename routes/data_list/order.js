const router = require('express').Router();
const User = require('../../models/user');
const Item = require('../../models/item');

router.get('/', async (req, res) => {
    let users = await User.findAll().populate('orderItems.item');
    res.render('data_list/order', { users: users });
});

module.exports = router;
