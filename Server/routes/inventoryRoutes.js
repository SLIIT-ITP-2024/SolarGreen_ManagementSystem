const express = require('express');
const inventoryRouter = express.Router();
const inventoryController = require('../controllers/inventoryController');
const Inventory = require('../models/inventoryModels/inventory.model');

//http://localhost:3000/api/v1/inventory/
inventoryRouter.get('/test', inventoryController.testController);
inventoryRouter.get('/inventories/get', inventoryController.getInventories);
inventoryRouter.get('/inventories/get/:id', inventoryController.getInventory);
inventoryRouter.post('/inventories/add', inventoryController.addInventory);
inventoryRouter.put('/inventories/update/:id', inventoryController.updateInventory);
inventoryRouter.delete('/inventories/delete/:id', inventoryController.deleteInventory);

module.exports = {inventoryRouter};