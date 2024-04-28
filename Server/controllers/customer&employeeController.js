const customerEmployeeController = require("../controllers/customer&employeeController");
const express = require("express");
const customerEmployeeRouter = express.Router();

customerEmployeeRouter.get("/test", customerEmployeeController.testController);

customerEmployeeRouter.post(
  "/add-employee",
  customerEmployeeController.addEmployeeControl
);

customerEmployeeRouter.post(
  "/edit-employee",
  customerEmployeeController.editEmployeeControl
);

customerEmployeeRouter.post(
  "/delete-employee",
  customerEmployeeController.deleteEmployeeControl
);

customerEmployeeRouter.get(
  "/employee",
  customerEmployeeController.getAllEmployeeControl
);

module.exports = { customerEmployeeRouter };