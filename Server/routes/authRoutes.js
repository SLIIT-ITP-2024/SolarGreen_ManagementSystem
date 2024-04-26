const userRole = require('../models/permissionModels/userRole.model');
const authController = require('../controllers/authController');
const express = require('express');
const loginRoute = express.Router();

loginRoute.post('/login', authController.login);


module.exports = { loginRoute };