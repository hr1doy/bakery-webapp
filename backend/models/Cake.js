const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;
