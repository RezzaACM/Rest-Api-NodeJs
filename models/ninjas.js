const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema on model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

// Export contact model
const Ninja = module.exports = mongoose.model('ninja', NinjaSchema);

module.exports.get = function (callback, limit) {
    Ninja.find(callback).limit(limit)
}