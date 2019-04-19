const httpMocks = require('node-mocks-http');
const eventEmitter = require('events').EventEmitter;
const should = require('should');
const mongoose = require('mongoose');

const Item = require('../models/item');
const service = require('../service/itemService');

describe('ItemService', () => {
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
    describe('READ TEST', () => {
        const ITEMS = [];
        const SIZE = 100;
        before( async() => {
            for(let i=0;i<SIZE;i++){
                let name = 'readDummy' + i;
                let price = i;
                let item = new Item({name : name,price: price});
                ITEMS.push(item);
                await item.save();
            }
        });
        it('READ ALL TEST', async() => {
            let req = httpMocks.createRequest({
                method: 'GET'
            });
            let res = httpMocks.createResponse({eventEmitter: eventEmitter});
            await service.readAllItems(req, res);
            let data = res._getData();
            res.statusCode.should.be.equal(200);
            data.length.should.be.equal(SIZE);
            for(let i=0;i<SIZE;i++){
                data[i].name.should.be.equal(ITEMS[i].name);
                data[i].price.should.be.equal(ITEMS[i].price);
            }
        });
        it('READ ITEM BY ID TEST', async() => {
            for(let i=0;i<SIZE;i++){
                let id = ITEMS[i].id;
                let req = httpMocks.createRequest({
                    method: 'GET',
                    params: {
                        id: id
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.readItemById(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(200);
                data.name.should.be.equal(ITEMS[i].name);
                data.price.should.be.equal(ITEMS[i].price);
            }
        });
        it('READ ITEMS BY NAME TEST', async() => {
            for(let i=0;i<SIZE;i++){
                let req = httpMocks.createRequest({
                    method: 'GET',
                    params: {
                        name: ITEMS[i].name
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.readItemsByName(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(200);
                data[0].name.should.be.equal(ITEMS[i].name);
                data[0].price.should.be.equal(ITEMS[i].price);
            }
        });
    });
    describe('UPDATE TEST', () => {
        const ITEMS = [];
        const SIZE = 100;
        before( async() => {
            for(let i=0;i<SIZE;i++){
                let name = 'originDummy' + i;
                let price = i;
                let item = new Item({name:name,price:price});
                ITEMS.push(item);
                await item.save();
            }
        });
        it('UPDATE TEST', async () => {
            for(let i=0;i<SIZE;i++){
                let id = ITEMS[i].id;
                let updatedItem = {
                    name: 'updatedDummy' + i,
                    price: i*1000
                };
                let req = httpMocks.createRequest({
                    method: 'PUT',
                    params: {
                        id: id
                    },
                    body: {
                        item: updatedItem
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.updateItem(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(202);
                data.name.should.be.equal(updatedItem.name);
                data.price.should.be.equal(updatedItem.price);
            }
        })
    });
    describe('DELETE TEST', () => {
        const ITEMS = [];
        const SIZE = 100;
        before( async() => {
            for(let i=0;i<SIZE;i++){
                let name = 'deleteDummy' + i;
                let price = i;
                let item = new Item({name : name,price:price});
                ITEMS.push(item);
                await item.save();
            }
        });
        it('DELETE TEST', async() => {
            for(let i=0;i<SIZE;i++){
                let id = ITEMS[i].id;
                let req = httpMocks.createRequest({
                    method: 'DELETE',
                    params: {
                        id: id
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.deleteItem(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(202);
                data.deleted.should.be.equal(true);
            }
        });
    });
    // describe('CREATE TEST', () => {
    //     const SIZE = 100;
    //     it('size 100', async () => {
    //         for(let i=0;i<SIZE;i++){
    //             let name = 'createDummy' + i;
    //             let price = i;
    //             let item = {
    //                 name : name,
    //                 price: price
    //             };
    //             let req = httpMocks.createRequest({
    //                 method: 'POST',
    //                 url: '/users',
    //                 body: {
    //                     item : item
    //                 }
    //             });
    //             let res = httpMocks.createResponse({eventEmitter: eventEmitter});
    //             await service.createItem(req, res);
    //             let data = res._getData();
    //             res.statusCode.should.be.equal(202);
    //             data.name.should.be.equal(name);
    //             data.price.should.be.equal(price);
    //             data.deleted.should.be.equal(false);
    //         }
    //     });
    // });
});
