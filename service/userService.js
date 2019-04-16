const User = require('../models/user');

module.exports = {
    readUserByEmail: async (req, res) => {
        try{
            let user = await User.findByEmail(req.params.email);
            res.status(200).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    createUser: (req, res) => {
        try{
            let user = new User(req.body);
            user.save();
            res.status(202).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    updateUser: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            // to do
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
    },
    readAllUser: async (req, res) => {
        try{
            let users = await User.findAll();
            res.status(200).send(users);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    createOrder: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            user.orderItems.push({item:req.body.itemId});
            user.save();
            res.status(202).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    updateOrder: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            // to do
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    deleteOrder: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            // to do
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readAllOrders: async (req, res) => {
        try{
            let user = await User.findById(req.params.id);
            // to do
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    }
};
