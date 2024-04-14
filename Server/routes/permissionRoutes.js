const permissionController = require('../controllers/permissionController');
const express = require('express');
const permissionRouter = express.Router();

permissionRouter.get('/test', permissionController.testController);

permissionRouter.post('/create', permissionController.createUserRole);
permissionRouter.get('/all', permissionController.getAllUserRoles);
permissionRouter.get('/:id', permissionController.getUserRoleByID);
permissionRouter.put('/update/:id', permissionController.updateUserRole);
permissionRouter.delete('/delete/:id', permissionController.deleteUserRole);

module.exports = {permissionRouter};
// Path: Server/routes/roleRoutes.js