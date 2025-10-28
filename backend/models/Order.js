const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    cakes: [{
        type: String,
        required: true
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Order', orderSchema);