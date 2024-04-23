const loginAttemptsController = require('../../controllers/permission/loginAtteptsController');
const express = require('express');
const { auth } = require('../../middleware/auth');
const loginAttemptsRouter = express.Router();

loginAttemptsRouter.get('/test', loginAttemptsController.test);

loginAttemptsRouter.post('/save',auth, loginAttemptsController.saveLoginAttempts);
loginAttemptsRouter.get('/all',auth, loginAttemptsController.getAllLoginAttempts);
loginAttemptsRouter.get('/search-by-ip/:ipAddress', auth, loginAttemptsController.getAllLoginAttemptsByIP);
loginAttemptsRouter.get('/search-by-username/:username',auth, loginAttemptsController.seachLoginAttemptsByUsername);

module.exports = {loginAttemptsRouter};