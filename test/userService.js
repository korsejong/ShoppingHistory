const httpMocks = require('node-mocks-http');
const eventEmitter = require('events').EventEmitter;
const should = require('should');
const mongoose = require('mongoose');

const User = require('../models/user');
const service = require('../service/userService');

describe('UserService', () => {
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
        const USERS = [];
        const SIZE = 100;
        before( async() => {
            for(let i=0;i<SIZE;i++){
                let email = 'readDummy' + i;
                let user = new User({email : email});
                USERS.push(user);
                await user.save();
            }
        });
        it('READ ALL TEST', async() => {
            let req = httpMocks.createRequest({
                method: 'GET'
            });
            let res = httpMocks.createResponse({eventEmitter: eventEmitter});
            await service.readAllUsers(req, res);
            let data = res._getData();
            res.statusCode.should.be.equal(200);
            data.length.should.be.equal(SIZE);
            for(let i=0;i<SIZE;i++){
                data[i].email.should.be.equal(USERS[i].email);
            }
        });
        it('READ USER BY ID TEST', async() => {
            for(let i=0;i<SIZE;i++){
                let id = USERS[i].id;
                let req = httpMocks.createRequest({
                    method: 'GET',
                    params: {
                        id: id
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.readUserById(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(200);
                data.email.should.be.equal(USERS[i].email);
            }
        });
        it('READ USER BY EMAIL TEST', async() => {
            for(let i=0;i<SIZE;i++){
                let email = USERS[i].email;
                let req = httpMocks.createRequest({
                    method: 'GET',
                    params: {
                        email: email
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.readUserByEmail(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(200);
                data.email.should.be.equal(email);
            }
        });
    });
    describe('UPDATE TEST', () => {
        const USERS = [];
        const SIZE = 100;
        before( async() => {
            for(let i=0;i<SIZE;i++){
                let email = 'originDummy' + i;
                let user = new User({email: email});
                USERS.push(user);
                await user.save();
            }
        });
        it('UPDATE TEST', async () => {
            for(let i=0;i<SIZE;i++){
                let id = USERS[i].id;
                let updatedUser = {
                    email: 'updatedDummy' + i
                };
                let req = httpMocks.createRequest({
                    method: 'PUT',
                    params: {
                        id: id
                    },
                    body: {
                        user: updatedUser
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.updateUser(req, res);
                let data = res._getData();
                res.statusCode.should.be.equal(202);
                data.email.should.be.equal(updatedUser.email);
            }
        })
    });
    describe('DELETE TEST', () => {
        const USERS = [];
        const SIZE = 100;
        before( async() => {
            for(let i=0;i<SIZE;i++){
                let email = 'deleteDummy' + i;
                let user = new User({email : email});
                USERS.push(user);
                await user.save();
            }
        });
        it('DELETE TEST', async() => {
            for(let i=0;i<SIZE;i++){
                let id = USERS[i].id;
                let req = httpMocks.createRequest({
                    method: 'DELETE',
                    params: {
                        id: id
                    }
                });
                let res = httpMocks.createResponse({eventEmitter: eventEmitter});
                await service.deleteUser(req, res);
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
    //             let email = 'createDummy' + i;
    //             let user = {email: email};
    //             let req = httpMocks.createRequest({
    //                 method: 'POST',
    //                 url: '/users',
    //                 body: {
    //                     user: user
    //                 }
    //             });
    //             let res = httpMocks.createResponse({eventEmitter: eventEmitter});
    //             await service.createUser(req, res);
    
    //             let data = res._getData();
    //             res.statusCode.should.be.equal(202);
    //             data.email.should.be.equal(email);
    //             data.deleted.should.be.equal(false);
    //         }
    //     });
    // });
});
