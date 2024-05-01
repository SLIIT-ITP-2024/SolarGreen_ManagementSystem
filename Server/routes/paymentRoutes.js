const express = require("express");
const paymentController = require("../controllers/paymentController");

const paymentRouter = express.Router();

// Test endpoint
paymentRouter.get("/test", paymentController.testController);

// Get all payments
paymentRouter.get("/getAll", paymentController.getPayments);

// Get single payment by ID
paymentRouter.get("/get/:id", paymentController.getPayment);

// Add a new payment
paymentRouter.post("/add", paymentController.addPayment);

// Update payment by ID
paymentRouter.put("/update/:id", paymentController.updatePayment);

// Delete payment by ID
paymentRouter.delete("/delete/:id", paymentController.deletePayment);

module.exports = { paymentRouter };
