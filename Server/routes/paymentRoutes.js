const paymentController = require('../controllers/paymentController');

const express = require('express');
const paymentRouter = express.Router();

paymentRouter.get('/test', paymentController.testController);

module.exports = {paymentRouter};