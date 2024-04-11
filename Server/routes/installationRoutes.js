const express = require('express');
const installationRouter = express.Router();
const Project = require('../models/installationModels/project.model');
const installationController = require('../controllers/installationController');

//http://localhost:3000/api/v1/installation
installationRouter.get('/test', installationController.testController);
installationRouter.get('/projects/get', installationController.getProjects);
installationRouter.get('/projects/get/:id', installationController.getProject);
installationRouter.post('/projects/add', installationController.addProject);
installationRouter.put('/projects/update/:id', installationController.updateProject);
installationRouter.delete('/projects/delete/:id', installationController.deleteProject);



module.exports = {installationRouter}