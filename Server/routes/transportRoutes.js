const transportController = require('../controllers/transportController');
const express = require('express');
const transportRouter = express.Router();

transportRouter.get('/test', transportController.testController);

module.exports = {transportRouter};