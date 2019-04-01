const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('data_management/item', { title: 'Items' });
});

module.exports = router;
