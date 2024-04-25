import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithLayout from "../../hoc/WithLayout";
import "./styles/Payment.scss";

const PaymentManagement = () => {
  const [orderID, setOrderID] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [paymentType, setPaymentType] = useState("Pay in Full");
  const [installmentPeriod, setInstallmentPeriod] = useState(12);
  const [comments, setComments] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleInstallmentPeriodChange = (e) => {
    setInstallmentPeriod(parseInt(e.target.value));
  };

  const calculateMonthlyPayment = () => {
    const monthlyPayment = totalCost / installmentPeriod;
    return monthlyPayment.toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/payment/add",
        {
          orderID,
          customerName,
          totalCost,
          paymentType,
          installmentPeriod,
          comments,
        }
      );

      console.log("Payment added successfully:", response.data);
      toast.success("Payment added successfully");

      setTimeout(() => {
        window.location.href = "/payment-details";
      }, 1000);

      setPaymentDetails({
        orderID,
        customerName,
        totalCost,
        paymentType,
        installmentPeriod,
        comments,
      });
      setFormSubmitted(true);

      setOrderID("#");
      setCustomerName("");
      setTotalCost(0);
      setPaymentType("Pay in Full");
      setInstallmentPeriod(12);
      setComments("");
    } catch (error) {
      console.error("Error adding payment:", error.response.data);
      toast.error("Error adding payment");
    }
  };

  return (
    <div className="CheckoutPage">
      <ToastContainer />
      <h1>Add New Payment</h1>
      <div className="order-details">
        <form onSubmit={handleSubmit}>
          <label>Enter Order ID:</label>
          <input
            type="text"
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
          />

          <label> Enter Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <label>Enter Order Amount:</label>
          <input
            type="number"
            value={totalCost}
            onChange={(e) => setTotalCost(parseFloat(e.target.value))}
          />

          <label>Select Payment Type:</label>
          <select value={paymentType} onChange={handlePaymentTypeChange}>
            <option value="Pay in Full">Pay in Full</option>
            <option value="Installments">Installments</option>
          </select>

          {paymentType === "Installments" && (
            <div className="installment-options">
              <label>Installment Period:</label>
              <select
                value={installmentPeriod}
                onChange={handleInstallmentPeriodChange}
              >
                <option value={12}>12 months</option>
                <option value={18}>18 months</option>
                <option value={36}>36 months</option>
                <option value={48}>48 months</option>
              </select>
              <div className="monthly-payment">
                Monthly Payment: ${calculateMonthlyPayment()}
              </div>
            </div>
          )}

          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WithLayout(PaymentManagement);
