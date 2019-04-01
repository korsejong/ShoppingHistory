const httpMocks = require('node-mocks-http');
const eventEmitter = require('events').EventEmitter;
const should = require('should');
const mongoose = require('mongoose');

const User = require('../models/user');
const Item = require('../models/item');
const service = require('../service/userService');

describe('UserService', () => {
    before( (done) => {
        mongoose.connect('mongodb://localhost/test',  { useCreateIndex :  true, useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', () => {
            done();
        });
    });
    after( (done) => {
        mongoose.connection.db.dropDatabase( () => {
            mongoose.connection.close(done);
        });
    });
    describe('create', () => {
        it('create user test', (done) => {
            let req = httpMocks.createRequest({
                method: 'POST',
                url: '/user',
                body: {
                    email: 'email1'
                }
            });
            let res = httpMocks.createResponse({eventEmitter:eventEmitter});
            service.createUser(req, res);
            res._getData();
            res.statusCode.should.be.equal(202);
            done();
        });
    });
    describe('read', () => {
        before( async () => {
            let user = new User({
                email: 'email2'
            });
            await user.save();
        });
        it('read user test', (done) => {
            let req = httpMocks.createRequest({
                method: 'GET',
                url: '/user',
                params: {
                    email: 'email2'
                }
            });
            let res = httpMocks.createResponse({eventEmitter:eventEmitter});
            service.readUserByEmail(req, res);
            res.on('end', () => {
                res._getData();
                res.statusCode.should.be.equal(200);
                done();
            });
        });
    });
    // describe('update', () => {
    //     it('update user test', (done) => {
    //         done();
    //     });
    // });
    describe('delete', () => {
        before( async () => {
            let user = new User({
                email: 'email3'
            });
            await user.save();
        });
        it('delete user test', (done) => {
            let req = httpMocks.createRequest({
                method: 'DELETE',
                url: '/user',
                params: {
                    email: 'email3'
                }
            });
            let res = httpMocks.createResponse({eventEmitter:eventEmitter});
            service.deleteUser(req, res);
            res.on('end', () => {
                res._getData();
                res.statusCode.should.be.equal(202);
                done();
            });
        });
    });
    describe('create order', () => {
        var itemId;
        before( async () => {
            let user = new User({
                email: 'email4'
            });
            let item = new Item({
                name: 'item1',
                price: 1000,
            });
            itemId = item._id;
            await user.save();
            await item.save();
        });
        it('create order test', (done) => {
            let req = httpMocks.createRequest({
                method: 'POST',
                url: '/user',
                params: {
                    email: 'email4',
                    itemId: itemId
                }
            });
            let res = httpMocks.createResponse({eventEmitter:eventEmitter});
            service.createOrder(req, res);
            res.on('end', () => {
                res._getData();
                res.statusCode.should.be.equal(202);
                done();
            });
        });
    });
//     describe('read order', () => {
//         it('read order by id test', (done) => {
//             done();
//         });
//     });
//     describe('update order', () => {
//         it('read order test', (done) => {
//             done();
//         });
//     });
//     describe('delete order', () => {
//         it('delete order test', (done) => {
//             done();
//         });
//     });
//     describe('delete order', () => {
//         it('delete order test', (done) => {
//             done();
//         });
//     });
//     describe('read all order', () => {
//         it('read all order test', (done) => {
//             done();
//         });
//     });
});
