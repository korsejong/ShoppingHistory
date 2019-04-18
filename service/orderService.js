const User = require('../models/user');
const Item = require('../models/item');
const Order = require('../models/order');

module.exports = {
    createOrder: async (req, res) => {
        try {
            let order = new Order(req.body);
            let user = await User.findById(req.body.user);
            user.orders.push(order);
            user.save();
            order.save();
            res.status(202).send(order);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readAllOrders: async (req, res) => {
        try {
            let orders = await Order.findAll();
            res.status(200).send(orders);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readOrderById: async (req, res) => {
        try {
            let order = await Order.findById(req.params.id);
            res.status(200).send(order);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readOrdersByUserId: async (req, res) => {
        try {
            let orders = await Order.findByUserId(req.params.userId);
            res.status(200).send(orders);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readOrdersByItemId: async (req, res) => {
        try {
            let orders = await Order.findByItemId(req.params.itemId);
            res.status(200).send(orders);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    updateOrder: async (req, res) => {
        try {
            let order = await Order.findById(req.params.id);
            // to do
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    deleteOrder: async (req, res) => {
        try {
            let order = await Order.findById(req.params.id);
            order.deleted = true;
            order.save();
            res.status(202).send(order);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    }
};