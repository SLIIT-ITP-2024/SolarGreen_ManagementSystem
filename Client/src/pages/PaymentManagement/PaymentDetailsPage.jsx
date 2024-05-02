import React, { useEffect, useState } from "react";
import WithLayout from "../../hoc";
import SearchBar from "../../components/_Shared/SearchBar/SearchBar";
import "./styles/PaymentDetails.scss";
import { Button } from "react-bootstrap";

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
    window.location.href = "/payment-management/add-payment";
  };
  const updatehandle = (_id) => {
    console.log("update clicked" + _id);
    window.location.href = `/payment-management/payment-update/${_id}`;
  };
  const deleteHandle = async (_id) => {
    console.log("delete clicked" + _id);
    try {
      await fetch(`http://localhost:3000/api/v1/payment/delete/${_id}`, {
        method: "DELETE",
      });
      setDataList(dataList.filter((data) => data._id !== _id));
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  }

  return (
    <>
      <button type="button" class="btn btn-primary" onClick={handleBtn}>
        Add Payment
      </button>
      <div className="payment-details-search-bar">
        <SearchBar />
      </div>{" "}
      <br />
      <br />
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
          {dataList.map((i, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{i.orderID}</td>
              <td>{i.customerName}</td>
              <td>{i.totalCost}</td>
              <td>{i.paymentType}</td>
              <td>{i.comments}</td>
              <td>
              <Button onClick={() => updatehandle(i._id)}>Update</Button>

              </td>
              <td>
                <Button onClick={()=> deleteHandle(i._id)} >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WithLayout(PaymentDetailsPage);
