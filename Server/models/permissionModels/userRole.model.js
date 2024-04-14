const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
    roleID: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
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
    validTime: {
        type: String,
        required: true
    },
    roleStatus: {
        type: String,
        required: true
    }
});

const userRole = mongoose.model('userRole', userRoleSchema);
module.exports = userRole;
