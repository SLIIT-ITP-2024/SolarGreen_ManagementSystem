const mongoose = require('mongoose');

const TransportSchema = mongoose.Schema(
    {
        ProjectID: {
            type: String,
            required: true
        },
        
        PhoneNumber: {
            type: Number,
            required: true
        },
    
        Address: {
            type: String,
            required: true
        },
        
        
        Status: {
            type: String,
            required: true
        }
        
        
    }
);

const Transport = mongoose.model("Transport", TransportSchema);

module.exports = Transport;