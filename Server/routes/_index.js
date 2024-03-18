
const express = require('express');

const {customerEmployeeRouter} = require('./customer&employeeRoutes');
const {inventoryRouter} = require('./inventoryRoutes');
const {leaveAndPlayRoleRouter} = require('./leave&playroleRoutes');
const {installationRouter} = require('./installationRoutes');
const {permissionRouter} = require('./permissionRoutes');
const {paymentRouter} = require('./paymentRoutes');
const {transportRouter} = require('./transportRoutes');
const {maintananceRouter} = require('./maintananceRoutes');


const mainRouter = express.Router();
mainRouter.use('/customer-employee', customerEmployeeRouter);
mainRouter.use('/inventory', inventoryRouter);
mainRouter.use('/leave-playrole', leaveAndPlayRoleRouter);
mainRouter.use('/installation', installationRouter);
mainRouter.use('/permission', permissionRouter);
mainRouter.use('/payment', paymentRouter);
mainRouter.use('/transport', transportRouter);
mainRouter.use('/maintanance', maintananceRouter);


module.exports = {mainRouter};