const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuidv1 = require('uuid/v1');

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: true
    },
    orderItems: [{
        id: {
            type: String,
            default: uuidv1().toString()
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        status: {
            type: String,
            required: true,
            default: '접수'
        }
    }],
    deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
userSchema.statics = {
    findAll() {
        return this.find({deleted: false});
    },
    findInPage(page, amount){
        amount = amount == null ? 10 : amount;
        return this.find({deleted: false})
                    .sort('created_at')
                    .limit(amount)
                    .skip(page*amount);
    },
    findByEmail(email){
        return this.findOne({
            email: email,
            deleted: false
        });
    },
};
module.exports = mongoose.model('User',userSchema);