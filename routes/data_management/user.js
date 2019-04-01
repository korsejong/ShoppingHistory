const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('data_management/user', { title: 'Users' });
});

module.exports = router;
