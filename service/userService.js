const User = require('../models/user');

module.exports = {
    createUser: (req, res) => {
        try{
            let user = new User(req.body.user);
            user.save();
            res.status(202).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readAllUsers: async (req, res) => {
        try{
            let users = await User.findAll();
            res.status(200).send(users);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readUserById: async (req, res) => {
        try {
            let user = await User.findById(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readUserByEmail: async (req, res) => {
        try{
            let user = await User.findByEmail(req.params.email);
            res.status(200).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    updateUser: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            Object.assign(user, req.body.user);
            user.save();
            res.status(202).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            user.deleted = true;
            user.save();
            res.status(202).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    }
};
