const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    customerID: {
        type: String,
        required: true
    },
    
    customerName: {
        type: String,
        required: true
    }
    
});

const TempCustomer = mongoose.model("TempCustomer", customerSchema);

module.exports = TempCustomer;