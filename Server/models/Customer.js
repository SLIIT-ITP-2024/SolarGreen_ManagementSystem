const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  gender: String,
  email: String,
  projectDate: Number,
  status: String,
  membership: { type: "String", default: "Silver" },
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
