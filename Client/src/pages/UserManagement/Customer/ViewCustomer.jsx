import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PencilIcon, ShieldCheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { formatDate } from '../../../utils/generalFunction';
import EditCustomer from './EditCustomer';
import WithLayout from '../../../hoc';
const apiUrl = import.meta.env.VITE_APIURL;

const CustomerList = ({ loader, setLoader }) => {
  const [selectedCustomer, setSelectCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModalClose = () => setModal(false);

  useEffect(() => {
    const fetchAllCustomer = async () => {
      try {
        const response = 
        await axios.get(`http://localhost:3000/api/v1/customer-employee/all-customer`);

        console.log('Server response:', response.data);
        if (response.data.successMsg) {
          setCustomers(response?.data?.customers);
        } else {
          console.log('Error response:', response.data.errorMsg);
        }
      } catch (error) {
        console.error('Error:', error.response.data.errorMsg);
      }
    };

    fetchAllCustomer();
  }, [loader]);

  const handleCustomerDelete = async (deleteEmployee) => {
    try {
      console.log('Employee to delete: ', deleteEmployee);
  
      const response = await axios.delete(`http://localhost:3000/api/v1/customer-employee/delete-customer`, {
        data: deleteEmployee // Send deleteEmployee data in the request body
      });
  
      console.log('Server response:', response.data);
      
      if (response.data.successMsg) {
        setCustomers(response.data.employees);
      } else {
        console.log('Error response:', response.data.errorMsg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="w-full">
      <table className="w-full mt-10 table-auto">
        <thead>
          <tr className="border-b-[1px] text-x">
            <th className="w-auto">Customer Name</th>
            <th className="w-auto">Gender</th>
            <th className="w-auto">Phone Number</th>
            <th className="w-auto">Email</th>
            <th className="w-auto">Date of Birth</th>
            {/* <th className="w-auto">Personal Details</th> */}
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
              <td>{formatDate(customer?.dob)}</td>
              {/* <td>{employee.personalDetail}</td> */}
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
        <EditCustomer closeModal={handleModalClose} customer={selectedCustomer} setLoader={setLoader} loader={loader} />
      )}
    </div>
  );
};

export default WithLayout(CustomerList)