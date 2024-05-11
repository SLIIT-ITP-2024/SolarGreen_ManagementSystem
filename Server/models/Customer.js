const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  gender: String,
  email: String,
  dob: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;