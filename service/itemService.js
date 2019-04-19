const Item = require('../models/item');

module.exports = {
    createItem: (req, res) => {
        try{
            let item = new Item(req.body.item);
            if(req.file) item.thumbnail = '/tmp/uploads/' + req.file.filename;
            item.save();
            res.status(202).send(item);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readAllItems: async (req, res) => {
        try{
            let items = await Item.findAll();
            res.status(200).send(items);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readItemsByName: async(req, res) => {
        try{
            let items = await Item.findByName(req.params.name);
            res.status(200).send(items);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readItemById: async (req, res) => {
        try{
            let item = await Item.findById(req.params.id);
            res.status(200).send(item);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    updateItem: async (req, res) => {
        try{
            let item = await Item.findById(req.params.id);
            Object.assign(item, req.body.item);
            item.save();
            res.status(202).send(item);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    deleteItem: async (req, res) => {
        try{
            let item = await Item.findById(req.params.id);
            item.deleted = true;
            item.save();
            res.status(202).send(item);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    }
};

