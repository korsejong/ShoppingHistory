// const httpMocks = require('node-mocks-http');
// const eventEmitter = require('events').EventEmitter;
// const should = require('should');
// const mongoose = require('mongoose');

// const Order = require('../models/order');
// const service = require('../service/orderService');

// describe('OrderService', () => {
//     let db;
//     before( async() => {
//         await mongoose.connect('mongodb://localhost/test',
//             { useCreateIndex :  true, useNewUrlParser: true });
//         db = mongoose.connection;
//     });
//     after( async() => {
//         await db.dropDatabase();
//         db.close();
//     });
//     describe('READ TEST', () => {
//         const ORDERS = [];
//         const SIZE = 100;
//         before( async() => {
//             for(let i=0;i<SIZE;i++){
//                 let name = 'readDummy' + i;
//                 let price = i;
//                 let order = new Order({name : name,price: price});
//                 ORDERS.push(order);
//                 await order.save();
//             }
//         });
//         it('READ ALL TEST', async() => {
//             let req = httpMocks.createRequest({
//                 method: 'GET'
//             });
//             let res = httpMocks.createResponse({eventEmitter: eventEmitter});
//             await service.readAllOrders(req, res);
//             let data = res._getData();
//             res.statusCode.should.be.equal(200);
//             data.length.should.be.equal(SIZE);
//             for(let i=0;i<SIZE;i++){
//                 data[i].name.should.be.equal(ORDERS[i].name);
//                 data[i].price.should.be.equal(ORDERS[i].price);
//             }
//         });
//         it('READ ORDER BY ID TEST', async() => {
//             for(let i=0;i<SIZE;i++){
//                 let id = ORDERS[i].id;
//                 let req = httpMocks.createRequest({
//                     method: 'GET',
//                     params: {
//                         id: id
//                     }
//                 });
//                 let res = httpMocks.createResponse({eventEmitter: eventEmitter});
//                 await service.readOrderById(req, res);
//                 let data = res._getData();
//                 res.statusCode.should.be.equal(200);
//                 data.name.should.be.equal(ORDERS[i].name);
//                 data.price.should.be.equal(ORDERS[i].price);
//             }
//         });
//         it('READ ORDERS BY NAME TEST', async() => {
//             for(let i=0;i<SIZE;i++){
//                 let req = httpMocks.createRequest({
//                     method: 'GET',
//                     params: {
//                         name: ORDERS[i].name
//                     }
//                 });
//                 let res = httpMocks.createResponse({eventEmitter: eventEmitter});
//                 await service.readOrdersByName(req, res);
//                 let data = res._getData();
//                 res.statusCode.should.be.equal(200);
//                 data[0].name.should.be.equal(ORDERS[i].name);
//                 data[0].price.should.be.equal(ORDERS[i].price);
//             }
//         });
//     });
//     describe('UPDATE TEST', () => {
//         const ORDERS = [];
//         const SIZE = 100;
//         before( async() => {
//             for(let i=0;i<SIZE;i++){
//                 let name = 'originDummy' + i;
//                 let price = i;
//                 let order = new Order({name:name,price:price});
//                 ORDERS.push(order);
//                 await order.save();
//             }
//         });
//         it('UPDATE TEST', async () => {
//             for(let i=0;i<SIZE;i++){
//                 let id = ORDERS[i].id;
//                 let updatedOrder = {
//                     name: 'updatedDummy' + i,
//                     price: i*1000
//                 };
//                 let req = httpMocks.createRequest({
//                     method: 'PUT',
//                     params: {
//                         id: id
//                     },
//                     body: {
//                         order: updatedOrder
//                     }
//                 });
//                 let res = httpMocks.createResponse({eventEmitter: eventEmitter});
//                 await service.updateOrder(req, res);
//                 let data = res._getData();
//                 res.statusCode.should.be.equal(202);
//                 data.name.should.be.equal(updatedOrder.name);
//                 data.price.should.be.equal(updatedOrder.price);
//             }
//         })
//     });
//     describe('DELETE TEST', () => {
//         const ORDERS = [];
//         const SIZE = 100;
//         before( async() => {
//             for(let i=0;i<SIZE;i++){
//                 let name = 'deleteDummy' + i;
//                 let price = i;
//                 let order = new Order({name : name,price:price});
//                 ORDERS.push(order);
//                 await order.save();
//             }
//         });
//         it('DELETE TEST', async() => {
//             for(let i=0;i<SIZE;i++){
//                 let id = ORDERS[i].id;
//                 let req = httpMocks.createRequest({
//                     method: 'DELETE',
//                     params: {
//                         id: id
//                     }
//                 });
//                 let res = httpMocks.createResponse({eventEmitter: eventEmitter});
//                 await service.deleteOrder(req, res);
//                 let data = res._getData();
//                 res.statusCode.should.be.equal(202);
//                 data.deleted.should.be.equal(true);
//             }
//         });
//     });
//     // describe('CREATE TEST', () => {
//     //     const SIZE = 100;
//     //     it('size 100', async () => {
//     //         for(let i=0;i<SIZE;i++){
//     //             let name = 'createDummy' + i;
//     //             let price = i;
//     //             let order = {
//     //                 name : name,
//     //                 price: price
//     //             };
//     //             let req = httpMocks.createRequest({
//     //                 method: 'POST',
//     //                 url: '/users',
//     //                 body: {
//     //                     order : order
//     //                 }
//     //             });
//     //             let res = httpMocks.createResponse({eventEmitter: eventEmitter});
//     //             await service.createOrder(req, res);
//     //             let data = res._getData();
//     //             res.statusCode.should.be.equal(202);
//     //             data.name.should.be.equal(name);
//     //             data.price.should.be.equal(price);
//     //             data.deleted.should.be.equal(false);
//     //         }
//     //     });
//     // });
// });
