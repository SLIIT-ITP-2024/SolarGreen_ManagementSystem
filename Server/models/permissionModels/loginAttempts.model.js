const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const loginAttemptsSchema = new mongoose.Schema({
    attemptID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    }
});


const loginAttempts = mongoose.model('loginAttempts', loginAttemptsSchema);
module.exports = loginAttempts;