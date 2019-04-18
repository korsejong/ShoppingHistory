const should = require('should');
const mongoose = require('mongoose');
const Item = require('../models/item');
const User = require('../models/user');
const Order = require('../models/order');

describe('Order Schema', () => {
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
        const ORDERS = [];
        before(async() => {
            for(let i=0;i<SIZE;i++){
                let item  = await new Item({name: 'dummyItem' + i, price: i}).save();
                let user = await new User({email: 'dummyUser' + i}).save();
                let order = await new Order({
                    user: user, 
                    item: item,
                    quantity: i,
                    price: item.price*i,
                    address: 'dummyAddress'+i,
                }).save();
                ORDERS.push(order);
            }
        });
        it('find all test', async () => {
            return (await Order.findAll()).length.should.be.equal(SIZE);
        });
        it('find in page test', async () => {
            let amount = 10;
            for(let page = 0; page<10;page++){
                let orders = await Order.findInPage({page:page,amount:amount}).populate('user').populate('item');
                orders.length.should.be.equal(amount);
                for(let i=0;i<amount;i++){
                    orders[i].user.email.should.be.equal('dummyUser' + (page*amount+i));
                    orders[i].item.name.should.be.equal('dummyItem' + (page*amount+i));
                    orders[i].item.price.should.be.equal((page*amount+i));
                    orders[i].quantity.should.be.equal((page*amount+i)); 
                    orders[i].price.should.be.equal( (page*amount+i)*(page*amount+i) );
                    orders[i].address.should.be.equal('dummyAddress'+(page*amount+i));
                }
            }
        });
        it('find by user id', async () => {
            for(let i=0;i<SIZE;i++){
                let userId = ORDERS[i].user._id;
                let order = await Order.findByUserId(userId).populate('user').populate('item');
                order[0].user.email.should.be.equal(ORDERS[i].user.email);
                order[0].item.name.should.be.equal(ORDERS[i].item.name);
            }
        });
        it('find by item id', async () => {
            for(let i=0;i<SIZE;i++){
                let itemId = ORDERS[i].item._id;
                let order = await Order.findByItemId(itemId).populate('user').populate('item');
                order[0].item.name.should.be.equal(ORDERS[i].item.name);
                order[0].user.email.should.be.equal(ORDERS[i].user.email);
            }
        });
    });
});