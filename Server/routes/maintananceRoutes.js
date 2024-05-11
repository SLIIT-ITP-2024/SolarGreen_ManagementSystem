
const express = require('express');
const maintananceRouter = express.Router();
const Schedule = require('../models/maintenanceModels/schedule');
const maintananceController = require('../controllers/maintananceController.js');

maintananceRouter.get('/test', maintananceController.testController);
maintananceRouter.get('/schedules/get', maintananceController.getSchedules);
maintananceRouter.get('/schedules/get/:id', maintananceController.getSchedule);
maintananceRouter.post('/schedules/add', maintananceController.addSchedule);
maintananceRouter.put('/schedules/update/:id', maintananceController.updateSchedule);
maintananceRouter.delete('/schedules/delete/:id', maintananceController.deleteSchedule);


module.exports = {maintananceRouter};
