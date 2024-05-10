const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema(
    {
        inventoryID: {
            type: String,
            required: true
        },
        
        inventoryName: {
            type: String,
            required: true
        },
    
        price: {
            type: Number,
            required: true
        },
        
        
        noOfItems: {
            type: Number,
            required: true
        },
        
    }
);

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;