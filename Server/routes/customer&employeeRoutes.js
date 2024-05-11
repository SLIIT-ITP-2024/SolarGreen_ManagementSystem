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

customerEmployeeRouter.post(
  "/add-customer",
  customerEmployeeController.addCustomerControl
);

customerEmployeeRouter.post(
  "/edit-customer",
  customerEmployeeController.editCustomerControl
);

customerEmployeeRouter.post(
  "/delete-customer",
  customerEmployeeController.deleteCustomerControl
);

customerEmployeeRouter.get(
  "/customer",
  customerEmployeeController.getAllCustomerControl
);

module.exports = { customerEmployeeRouter };
