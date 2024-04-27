const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    employeeName: String,
    employeeId: String,
    phoneNumber: String,
    email: String,
    role: String,
    startingDate: Number,
    endingDate: Number,
    personalDetails: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;