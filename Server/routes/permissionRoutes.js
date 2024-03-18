const permissionController = require('../controllers/permissionController');
const express = require('express');
const permissionRouter = express.Router();

permissionRouter.get('/test', permissionController.testController);


module.exports = {permissionRouter};
// Path: Server/routes/roleRoutes.js