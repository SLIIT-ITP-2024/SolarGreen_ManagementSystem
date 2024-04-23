const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },

  customerName: {
    type: String,
    required: true,
  },

  totalCost: {
    type: Number,
    required: true,
  },

  paymentType: {
    type: String,
    required: true,
  },

  comments: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;
