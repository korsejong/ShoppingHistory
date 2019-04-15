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
    findInPage(page, amount) {
        amount = amount == null ? 10 : amount;
        return this.find({deleted: false})
                    .sort('created_at')
                    .limit(amount)
                    .skip(page*amount);
    },
    findByName(name) {
        return this.find({name: name, deleted: false});
    }
};
module.exports = mongoose.model('Item',itemSchema);