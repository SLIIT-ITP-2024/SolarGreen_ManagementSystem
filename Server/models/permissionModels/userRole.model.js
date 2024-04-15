const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

userRoleSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userRoleSchema.methods.isValidPassword = async function(password) {
    const isValidPassword = await bcrypt.compare(password, this.password);
    return isValidPassword;
}

const userRole = mongoose.model('userRole', userRoleSchema);
module.exports = userRole;
