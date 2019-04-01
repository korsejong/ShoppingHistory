const router = require('express').Router();
const User = require('../../models/user');

router.get('/', async (req, res) => {
    let users = await User.findAll();
    res.render('data_list/user', { users: users });
});

module.exports = router;
