const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('data_management/order', { title: 'Orders' });
});

module.exports = router;
