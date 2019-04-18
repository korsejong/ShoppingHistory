const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order',
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
    findInPage(options){
        let page = options.page || 0;
        let amount = options.amount || 10;
        let sortBy = options.sortBy || 'created_at';
        return this.find({deleted: false})
                    .sort(sortBy)
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