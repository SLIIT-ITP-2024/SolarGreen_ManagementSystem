import React, { useEffect, useState } from "react";
import WithLayout from "../../hoc";
import SearchBar from "../../components/_Shared/SearchBar/SearchBar";
import "./styles/PaymentDetails.scss";

const PaymentDetailsPage = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/payment/getAll"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch payment details");
        }
        const data = await response.json();
        console.log(data);
        setDataList(data);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    fetchData();
  }, []);

  const handleBtn = () => {
    window.location.href = "add-payment";
  };

  return (
    <>
      <button type="button" class="btn btn-primary" onClick={handleBtn}>
        Add Payment
      </button>

      <div className="payment-details-search-bar">
        <SearchBar />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Total Cost</th>
            <th scope="col">Payment Type</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {dataList.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.orderID}</td>
              <td>{data.customerName}</td>
              <td>{data.totalCost}</td>
              <td>{data.paymentType}</td>
              <td>{data.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WithLayout(PaymentDetailsPage);
