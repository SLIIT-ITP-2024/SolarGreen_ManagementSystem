import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithLayout from "../../hoc/WithLayout";
import "./styles/Payment.scss";
import { useParams } from "react-router-dom";

const PaymentUpdatePage = () => {
  const {_id} = useParams();
  console.log(_id)
  const [orderID, setOrderID] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [installmentPeriod, setInstallmentPeriod] = useState("");
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
      const response = await axios.put(
        `http://localhost:3000/api/v1/payment/update/${_id}`, // Corrected URL
        {
          orderID,
          customerName,
          totalCost,
          paymentType,
          installmentPeriod,
          comments,
        }
      );
  
      console.log("Payment updated successfully:", response.data);
      toast.success("Payment updated successfully");
  
      setTimeout(() => {
        window.location.href = "/payment-management";
      }, 1000);
  
      setFormSubmitted(true);
    } catch (error) {
      toast.error("Error updating payment");
    }
  };
  

  return (
    <div className="CheckoutPage">
      <ToastContainer />
      <h1>Update Payment</h1>
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

export default WithLayout(PaymentUpdatePage);
