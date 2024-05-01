const transportController = require('../controllers/transportController');
const express = require('express');
const transportRouter = express.Router();

transportRouter.get('/test', transportController.testController);
transportRouter.post('/create',transportController.createTransport);
transportRouter.get('/all', transportController.getAllTransports);
transportRouter.get('/get/:id', transportController.getTransportByID);
transportRouter.put('/update/:id', transportController.updateTransport);
transportRouter.delete('/delete/:id', transportController.deleteTransport);

module.exports = {transportRouter};