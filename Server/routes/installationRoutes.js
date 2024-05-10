const express = require('express');
const installationRouter = express.Router();
const installationController = require('../controllers/installationController');
const Project = require('../models/installationModels/project');

//http://localhost:3000/api/v1/installation/

// Projects
installationRouter.get('/test', installationController.testController);
installationRouter.get('/projects/get', installationController.getProjects);
installationRouter.get('/projects/get/:id', installationController.getProject);
installationRouter.post('/projects/add', installationController.addProject);
installationRouter.put('/projects/update/:id', installationController.updateProject);
installationRouter.delete('/projects/delete/:id', installationController.deleteProject);

// Temporary Customers
installationRouter.get('/customers/get', installationController.getCustomers);
installationRouter.get('/customers/get/:id', installationController.getCustomer);
installationRouter.post('/customers/add', installationController.addCustomer);
installationRouter.delete('/customers/delete/:id', installationController.deleteCustomer);



module.exports = {installationRouter}