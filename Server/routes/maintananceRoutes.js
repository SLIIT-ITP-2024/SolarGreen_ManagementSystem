const maintananceController = require('../controllers/maintananceController');
const express = require('express');
const maintananceRouter = express.Router();

maintananceRouter.get('/test', maintananceController.testController);

module.exports = {maintananceRouter};
