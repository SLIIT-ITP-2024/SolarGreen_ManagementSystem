
const express = require('express');

const {customerEmployeeRouter} = require('./customer&employeeRoutes');
const {inventoryRouter} = require('./inventoryRoutes');
const {leaveAndPlayRoleRouter} = require('./leave&playroleRoutes');
const {installationRouter} = require('./installationRoutes');
const {permissionRouter} = require('./permission/permissionRoutes');
const {paymentRouter} = require('./paymentRoutes');
const {transportRouter} = require('./transportRoutes');
const {maintananceRouter} = require('./maintananceRoutes');

const {loginRoute} = require('./authRoutes');
const {loginAttemptsRouter} = require('./permission/loginAttemptsRoutes');

const mainRouter = express.Router();
mainRouter.use('/customer-employee', customerEmployeeRouter);
mainRouter.use('/inventory', inventoryRouter);
mainRouter.use('/leave-playrole', leaveAndPlayRoleRouter);
mainRouter.use('/installation', installationRouter);
mainRouter.use('/permission', permissionRouter);
mainRouter.use('/payment', paymentRouter);
mainRouter.use('/transport', transportRouter);
mainRouter.use('/maintanance', maintananceRouter);

mainRouter.use('/auth', loginRoute);
mainRouter.use('/login-attempts', loginAttemptsRouter);


module.exports = {mainRouter};