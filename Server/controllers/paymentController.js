const Payment = require("../models/paymentModels/payment.model");

// Test controller
// http://localhost:3000/api/v1/payment/test
const testController = (req, res) => {
  res.send("Payment controller is working!");
};

// Get all payments
// http://localhost:3000/api/v1/payment/payments/get
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single payment by ID
// http://localhost:3000/api/v1/payment/payments/get/:id
const getPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findById(id);

    if (!payment) {
      return res.status(404).json({ status: "Payment not found" });
    }

    res.status(200).json({ payment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new payment
// http://localhost:3000/api/v1/payment/payments/add
const addPayment = async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json("Payment Added!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update payment by ID
// http://localhost:3000/api/v1/payment/payments/update/:id
const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPayment = req.body;
    await Payment.findByIdAndUpdate(id, updatedPayment);
    res.status(200).json({ status: "Payment Updated!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete payment by ID
// http://localhost:3000/api/v1/payment/payments/delete/:id
const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await Payment.findByIdAndDelete(id);
    res.status(200).json({ status: "Payment Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  testController,
  getPayments,
  getPayment,
  addPayment,
  updatePayment,
  deletePayment,
};
