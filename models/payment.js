const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
    mode: {
        type: String,
        required: true
    },
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
paymentSchema.statics = {
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
    }
};
module.exports = mongoose.model('Payment',paymentSchema);