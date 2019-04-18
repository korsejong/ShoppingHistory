const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ORDERSTATUS = ['접수','배송중','배송완료','결제대기','결제완료'];

const orderSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    // payment: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Payment',
    //     required: true
    // },
    status: {
        type: String,
        enum: ORDERSTATUS,
        required: true,
        default: ORDERSTATUS[0]
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
orderSchema.statics = {
    findAll() {
        return this.find({deleted: false});
    },
    findByUserId(userId, options) {
        if(options){
            let amount = options.amount || 10;
            let page = options.page || 0;
            let sortBy = options.sortBy || 'created_at';
            return this.find({deleted:false, user: userId})
                        .sort(sortBy)
                        .limit(amount)
                        .skip(page*amount);
        }
        return this.find({deleted:false, user: userId});
    },
    findByItemId(itemId, options) {
        if(options){
            let amount = options.amount || 10;
            let page = options.page || 0;
            let sortBy = options.sortBy || 'created_at';
            return this.find({deleted:false, item: itemId})
                        .sort(sortBy)
                        .limit(amount)
                        .skip(page*amount);
        }
        return this.find({deleted:false, item: itemId});
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
module.exports = mongoose.model('Order',orderSchema);