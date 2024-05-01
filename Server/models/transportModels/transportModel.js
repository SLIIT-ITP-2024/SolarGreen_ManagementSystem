const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
    transportID: {
        type: String,
        required: true
    
    },
    address: {
        type: String,
        required: true
    },
    transportStatus: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transport', transportSchema);