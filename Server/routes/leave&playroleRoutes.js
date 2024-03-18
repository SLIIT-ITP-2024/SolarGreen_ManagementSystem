const leaveAndPlayRoleController = require('../controllers/leave&playroleController');
const express = require('express');
const leaveAndPlayRoleRouter = express.Router();

leaveAndPlayRoleRouter.get('/test', leaveAndPlayRoleController.testController);

module.exports = {leaveAndPlayRoleRouter};
