const Item = require('../models/item');

module.exports = {
    readItemById: async (req, res) => {
        try{
            let item = await Item.findById(req.params.id);
            res.status(200).send(item);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    createItem: (req, res) => {
        try{
            let item = new Item(req.body);
            if(req.file) item.thumbnail = '/tmp/uploads/' + req.file.filename;
            item.save();
            res.status(202).send(item);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    updateItem: async (req, res) => {
        try{
            let item = await Item.findById(req.params.id);
            // to do
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
    },
    readAllItem: async (req, res) => {
        try{
            let items = await Item.findAll();
            res.status(200).send(items);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    },
    readItemByName: async(req, res) => {
        try{
            let items = await Item.findByName(req.params.name);
            res.status(200).send(items);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    }
};

