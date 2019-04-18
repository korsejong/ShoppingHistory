const router = require('express').Router();
const Order = require('../../models/order');

router.get('/', async (req, res) => {
    let orders = await Order.findAll().populate('user').populate('item');
    res.render('data_list/order', { orders: orders });
});

module.exports = router;
