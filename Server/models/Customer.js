const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  gender: String,
  email: String,
  role: String,
  startingDate: Number,
  endingDate: Number,
  personalDetail: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;