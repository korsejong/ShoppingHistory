// const httpMocks = require('node-mocks-http');
// const eventEmitter = require('events').EventEmitter;
// const should = require('should');
// const mongoose = require('mongoose');

// const User = require('../models/user');
// const Item = require('../models/item');
// const service = require('../service/itemService');

// describe('ItemService', () => {
//     before( (done) => {
//         mongoose.connect('mongodb://localhost/test',  { useCreateIndex :  true, useNewUrlParser: true });
//         const db = mongoose.connection;
//         db.on('error', console.error.bind(console, 'connection error'));
//         db.once('open', () => {
//             done();
//         });
//     });
//     after( (done) => {
//         mongoose.connection.db.dropDatabase( () => {
//             mongoose.connection.close(done);
//         });
//     });
//     describe('create', () => {
//         it('create item test', (done) => {
//             let req = httpMocks.createRequest({
//                 method: 'POST',
//                 url: '/item',
//                 body: {
//                     name: 'item1',
//                     price: 1000
//                 }
//             });
//             let res = httpMocks.createResponse({eventEmitter:eventEmitter});
//             service.createItem(req, res);
//             res._getData();
//             res.statusCode.should.be.equal(202);
//             done();
//         });
//     });
//     describe('read', () => {
//         var itemId;
//         before( async () => {
//             let item = new Item({
//                 name: 'item2',
//                 price: 1000
//             });
//             itemId = item._id;
//             await item.save();
//         });
//         it('read item test', (done) => {
//             let req = httpMocks.createRequest({
//                 method: 'GET',
//                 url: '/item',
//                 params: {
//                     id: itemId
//                 }
//             });
//             let res = httpMocks.createResponse({eventEmitter:eventEmitter});
//             service.readItemById(req, res);
//             res.on('end', () => {
//                 res._getData();
//                 res.statusCode.should.be.equal(200);
//                 done();
//             });
//         });
//     });
//     // describe('update', () => {
//     //     it('update item test', (done) => {
//     //         done();
//     //     });
//     // });
//     describe('delete', () => {
//         var itemId;
//         before( async () => {
//             let item = new Item({
//                 name: 'item3',
//                 price: 1000
//             });
//             itemId = item._id;
//             await item.save();
//         });
//         it('delete item test', (done) => {
//             let req = httpMocks.createRequest({
//                 method: 'DELETE',
//                 url: '/item',
//                 params: {
//                     id: itemId
//                 }
//             });
//             let res = httpMocks.createResponse({eventEmitter:eventEmitter});
//             service.deleteItem(req, res);
//             res.on('end', () => {
//                 res._getData();
//                 res.statusCode.should.be.equal(202);
//                 done();
//             });
//         });
//     });
//     describe('read all', () => {
//         before( async () => {
//             let item1 = new Item({
//                 name: 'item4',
//                 price: 1000
//             });
//             let item2 = new Item({
//                 name: 'item5',
//                 price: 1000
//             });
//             let item3 = new Item({
//                 name: 'item6',
//                 price: 1000
//             });
//             await item1.save();
//             await item2.save();
//             await item3.save();
//         });
//         it('read all item test', (done) => {
//             let req = httpMocks.createRequest({
//                 method: 'GET',
//                 url: '/item/all',
//             });
//             let res = httpMocks.createResponse({eventEmitter:eventEmitter});
//             service.readAllItem(req, res);
//             res.on('end', () => {
//                 res._getData();
//                 res.statusCode.should.be.equal(200);
//                 done();
//             });
//         });
//     });
// });
