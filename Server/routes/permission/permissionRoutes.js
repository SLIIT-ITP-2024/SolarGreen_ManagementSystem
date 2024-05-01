const permissionController = require('../../controllers/permission/permissionController');
const express = require('express');
const permissionRouter = express.Router();
const {auth}  = require('../../middleware/auth');

permissionRouter.get('/test', permissionController.testController);

permissionRouter.post('/create', permissionController.createUserRole);
permissionRouter.get('/all', auth, permissionController.getAllUserRoles);
permissionRouter.get('/:id',auth, permissionController.getUserRoleByID);
permissionRouter.put('/update/:id',auth, permissionController.updateUserRole);
permissionRouter.delete('/delete/:id',auth, permissionController.deleteUserRole);

permissionRouter.get('/search/:username', permissionController.searchByUsername);


module.exports = {permissionRouter};
// Path: Server/routes/roleRoutes.js