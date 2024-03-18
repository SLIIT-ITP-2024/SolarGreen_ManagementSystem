const inventoryController = require('../controllers/inventoryController');
const express = require('express');
const inventoryRouter = express.Router();

inventoryRouter.get('/test', inventoryController.testController);

module.exports = {inventoryRouter};