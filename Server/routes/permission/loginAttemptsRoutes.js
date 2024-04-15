const loginAttemptsController = require('../../controllers/permission/loginAtteptsController');
const express = require('express');
const loginAttemptsRouter = express.Router();

loginAttemptsRouter.get('/test', loginAttemptsController.test);

loginAttemptsRouter.post('/save', loginAttemptsController.saveLoginAttempts);
loginAttemptsRouter.get('/all', loginAttemptsController.getAllLoginAttempts);
loginAttemptsRouter.get('/search-by-ip/:ipAddress', loginAttemptsController.getAllLoginAttemptsByIP);
loginAttemptsRouter.get('/search-by-username/:username', loginAttemptsController.seachLoginAttemptsByUsername);

module.exports = {loginAttemptsRouter};