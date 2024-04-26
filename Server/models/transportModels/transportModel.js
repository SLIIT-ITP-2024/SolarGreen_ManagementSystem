const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
    transportID: {
        type: String,
        required: true
    },
    transportType: {
        type: String,
        required: true
    },
    transportName: {
        type: String,
        required: true
    },
    transportStatus: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transport', transportSchema);