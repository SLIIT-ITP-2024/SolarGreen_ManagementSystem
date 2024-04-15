const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    employeeName: String, 
    employeeId: String,
    phoneNumber: String,
    email: String,
    role: String,
    startingDate: Number,
    endingDate: Number,
    personalDetails: String
})

const UserModel = mongoose.model("employeePage", UserSchema)
module.exports = UserModel