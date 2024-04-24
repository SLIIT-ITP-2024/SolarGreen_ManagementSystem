const loginAttempts = require('../../models/permissionModels/loginAttempts.model');
const uuid = require('uuid');
const test = async (req, res) => {
    res.send('loginAttempts controller is working!');
}

const saveLoginAttempts = async (req, res) => {
    const { email, password, ipAddress } = req.body;
    try {
        const newLoginAttempt = new loginAttempts({
            attemptID: uuid.v4(),
            email,
            password,
            ipAddress,
            time : new Date().toLocaleString()
        });
        await newLoginAttempt.save();
        res.status(201).json(newLoginAttempt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllLoginAttempts = async (req, res) => {
    try {
        const loginAttemptsdetails = await loginAttempts.find();
        res.status(200).json(loginAttemptsdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllLoginAttemptsByIP = async (req, res) => {
    try {
        const loginAttemptsdetails = await loginAttempts.find({ ipAddress: req.params.ipAddress });
        res.status(200).json(loginAttemptsdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const seachLoginAttemptsByUsername = async (req, res) => {
    try {
        const loginAttemptsdetails = await loginAttempts.find({ username: req.params.username });
        res.status(200).json(loginAttemptsdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { test, saveLoginAttempts, getAllLoginAttempts, getAllLoginAttemptsByIP, seachLoginAttemptsByUsername };