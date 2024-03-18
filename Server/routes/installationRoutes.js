const installationController = require('../controllers/installationController');
const express = require('express');
const installationRouter = express.Router();

installationRouter.get('/test', installationController.testController);



module.exports = {installationRouter};