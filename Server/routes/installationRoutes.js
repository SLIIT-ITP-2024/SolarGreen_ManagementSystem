const installationController = require('../controllers/installationController');
const express = require('express');
const installationRouter = express.Router();

//http://localhost:3000/api/v1/installation
installationRouter.get('/test', installationController.testController);



module.exports = {installationRouter};