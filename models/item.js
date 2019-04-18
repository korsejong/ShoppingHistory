const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String
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
itemSchema.statics = {
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
    findByName(name) {
        return this.find({name: name, deleted: false});
    }
};
module.exports = mongoose.model('Item',itemSchema);