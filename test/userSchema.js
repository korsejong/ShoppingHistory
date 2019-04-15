const should = require('should');
const mongoose = require('mongoose');
const User = require('../models/user');

describe('User Schema', () => {
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
    describe('Statics', () => {
        const SIZE = 100;
        before(async() => {
            for(let i=0;i<SIZE;i++){
                // console.log(email);
                await new User({email: 'dummy' + i}).save();
                await new User({email: 'deletedDummy' + i, deleted: true}).save();
            }
        })
        it('find all test', async () => {
            return (await User.findAll()).length.should.be.equal(SIZE);
        });
        it('find in page test', async () => {
            let amount = 10;
            for(let page = 0; page<10;page++){
                let users = await User.findInPage(page,amount);
                users.length.should.be.equal(amount);
                for(let i=0;i<amount;i++){
                    users[i].email.should.be.equal("dummy" + (page*amount+i));
                }
            }
            return ;
        });
        it('find by email test', async () => {
            for(let i=0;i<100;i++){
                let email = "dummy" + i;
                let user = await User.findByEmail(email);
                user.email.should.be.equal(email);
            }
            return ;
        });
    });
});