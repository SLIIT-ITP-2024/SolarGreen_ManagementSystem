const customerEmployeeController = require('../controllers/customer&employeeController');
const express = require('express');
const customerEmployeeRouter = express.Router();

customerEmployeeRouter.get('/test', customerEmployeeController.testController);

module.exports = {customerEmployeeRouter};