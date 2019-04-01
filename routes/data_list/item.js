const router = require('express').Router();
const Item = require('../../models/item');

router.get('/', async (req, res) => {
    let items = await Item.findAll();
    res.render('data_list/item', { items: items });
});

module.exports = router;
