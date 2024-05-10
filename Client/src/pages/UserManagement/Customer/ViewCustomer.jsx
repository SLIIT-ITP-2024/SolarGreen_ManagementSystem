import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PencilIcon,
  ShieldCheckIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { formatDate } from "../../../utils/generalFunction";
import EditCustomer from "./EditCustomer";
const apiUrl = import.meta.env.VITE_APIURL;

const CustomerList = ({ loader, setLoader, customers, setCustomers }) => {
  const [selectedCustomer, setSelectCustomer] = useState(null);
  const [modal, setModal] = useState(false);

  const handleModalClose = () => setModal(false);

  const handleCustomerDelete = (deleteEmployee) => {
    console.log("employee dele: ", deleteEmployee);
    const deleteCustomerFunc = async () => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/v1/customer-employee/delete-customer`,
          deleteEmployee
        );
        console.log("Server response:", response.data);
        if (response.data.successMsg) {
          setLoader(loader + 1);
        } else {
          console.log("Error response:", response.data.errorMsg);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    deleteCustomerFunc();
  };

  return (
    <div className="w-full rounded-lg">
      <table className="w-full mt-10 table-auto">
        <thead>
          <tr className="border-b-[1px] text-x">
            <th className="w-auto">Customer Name</th>
            <th className="w-auto">Gender</th>
            <th className="w-auto">Phone Number</th>
            <th className="w-auto">Email</th>
            <th className="w-auto">Project Date</th>
            <th className="w-auto">Status</th>
            <th className="w-auto">Membership</th>
            <th className="w-auto"></th>
          </tr>
        </thead>
        <tbody className="">
          {customers?.map((customer, index) => (
            <tr key={index} className="bg-white h-10 w-full rounded-lg">
              <td>{customer?.name}</td>
              <td>{customer?.gender}</td>
              <td>{customer?.phone}</td>
              <td>{customer?.email}</td>
              <td>{formatDate(customer?.projectDate)}</td>
              <td>{customer?.status}</td>
              <td>{customer?.membership}</td>
              <td>
                <div className="flex justify-center gap-x-2 items-center">
                  <div
                    onClick={() => {
                      setModal(true);
                      setSelectCustomer(customer);
                    }}
                    className="w-8 h-8 hover:bg-green-400 p-1 rounded-md"
                  >
                    <PencilIcon />
                  </div>
                  <div
                    onClick={() => {
                      handleCustomerDelete(customer);
                    }}
                    className="w-8 h-8 hover:bg-red-400 p-1 rounded-md"
                  >
                    <TrashIcon />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal && (
        <EditCustomer
          closeModal={handleModalClose}
          customer={selectedCustomer}
          setLoader={setLoader}
          loader={loader}
        />
      )}
    </div>
  );
};

export default CustomerList;
