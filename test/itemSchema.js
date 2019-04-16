const should = require('should');
const mongoose = require('mongoose');
const Item = require('../models/item');

describe('Item Schema', () => {
    let db;
    before( async() => {
        await mongoose.connect('mongodb://localhost/test',
            { useCreateIndex :  true, useNewUrlParser: true });
        db = mongoose.connection;
    });
    after( async() => {
        await db.dropDatabase();
        db.close();
    });
    describe('Statics', () => {
        const SIZE = 100;
        before(async() => {
            for(let i=0;i<SIZE;i++){
                await new Item({name: 'dummy' + i, price: i}).save();
                await new Item({name: 'dummy' + i, price: i, deleted: true}).save();
            }
        });
        it('find all test', async () => {
            return (await Item.findAll()).length.should.be.equal(SIZE);
        });
        it('find in page test', async () => {
            let amount = 10;
            for(let page = 0; page<10;page++){
                let items = await Item.findInPage(page,amount);
                items.length.should.be.equal(amount);
                for(let i=0;i<amount;i++){
                    items[i].name.should.be.equal("dummy" + (page*amount+i));
                    items[i].price.should.be.equal((page*amount+i));
                }
            }
        });
        it('find by name test', async () => {
            for(let i=0;i<100;i++){
                let name = "dummy" + i;
                let item = await Item.findByName(name);
                item[0].name.should.be.equal(name);
            }
        });
    });
});