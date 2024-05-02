const customerEmployeeController = require("../controllers/customer&employeeController");
const express = require("express");
const customerEmployeeRouter = express.Router();

customerEmployeeRouter.get("/test", customerEmployeeController.testController);

customerEmployeeRouter.post(
  "/add-employee",
  customerEmployeeController.addEmployeeControl
);

customerEmployeeRouter.put(
  "/edit-employee",
  customerEmployeeController.editEmployeeControl
);

customerEmployeeRouter.delete(
  "/delete-employee",
  customerEmployeeController.deleteEmployeeControl
);

customerEmployeeRouter.get(
  "/all-employee",
  customerEmployeeController.getAllEmployeeControl
);

customerEmployeeRouter.post(
  "/add-customer",
  customerEmployeeController.addCustomerControl
);

customerEmployeeRouter.put(
  "/edit-customer",
  customerEmployeeController.editCustomerControl
);

customerEmployeeRouter.delete(
  "/delete-customer",
  customerEmployeeController.deleteCustomerControl
);

customerEmployeeRouter.get(
  "/all-customer",
  customerEmployeeController.getAllCustomerControl
);

module.exports = { customerEmployeeRouter};