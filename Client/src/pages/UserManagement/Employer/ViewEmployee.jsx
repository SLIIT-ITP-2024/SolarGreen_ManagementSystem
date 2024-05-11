import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PencilIcon, ShieldCheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import EditEmployee from './EditEmployer';
import { formatDate } from '../../../utils/generalFunction';
import WithLayout from '../../../hoc';
const apiUrl = import.meta.env.VITE_APIURL;

const ViewEmployeeList = ({ loader, setLoader }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModalClose = () => setModal(false);

  useEffect(() => {
    const fetchAllEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/customer-employee/all-employee`);
        console.log('Server response:', response.data);
        if (response.data.successMsg) {
          setEmployees(response?.data?.employees);
        } else {
          console.log('Error response:', response.data.errorMsg);
        }
      } catch (error) {
        console.error('Error:', error.response.data.errorMsg);
      }
    };

    fetchAllEmployee();
  }, [loader]);

  const handleEmployeeDelete = async (deleteEmployee) => {
    try {
      console.log('Employee to delete: ', deleteEmployee);
  
      const response = await axios.delete(`http://localhost:3000/api/v1/customer-employee/delete-employee`, {
        data: deleteEmployee // Sending deleteEmployee data in the request body
      });
  
      console.log('Server response:', response.data);
  
      if (response.data.successMsg) {
        setEmployees(response.data.employees);
      } else {
        console.log('Error response:', response.data.errorMsg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  console.log('employees: ', employees);

  return (
    <div className="w-full">
      <table className="w-full mt-10 table-auto">
        <thead>
          <tr className="border-b-[1px] text-x">
            <th className="w-auto">Employee Name</th>
            <th className="w-auto">Gender</th>
            <th className="w-auto">Phone Number</th>
            <th className="w-auto">Email</th>
            <th className="w-auto">Role</th>
            <th className="w-auto">Starting Date</th>
            {/* <th className="w-auto">Personal Details</th> */}
            <th className="w-auto"></th>
          </tr>
        </thead>
        <tbody className="">
          {employees?.map((employee, index) => (
            <tr key={index} className="bg-white h-10 w-full rounded-lg">
              <td>{employee?.name}</td>
              <td>{employee?.gender}</td>
              <td>{employee?.phone}</td>
              <td>{employee?.email}</td>
              <td>{employee?.role}</td>
              <td>{formatDate(employee?.startingDate)}</td>
              {/* <td>{employee.personalDetail}</td> */}
              <td>
                <div className="flex justify-center gap-x-2 items-center">
                  <div
                    onClick={() => {
                      setModal(true);
                      setSelectedEmployee(employee);
                    }}
                    className="w-8 h-8 hover:bg-green-400 p-1 rounded-md"
                  >
                    <PencilIcon />
                  </div>
                  <div
                    onClick={() => {
                      handleEmployeeDelete(employee);
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

      {selectedEmployee && (
        <div className="modal">
          <div className="modal-content">
            <h2>Employee Details</h2>
            <p>
              <strong>Employee Name:</strong> {selectedEmployee.name}
            </p>
            <p>
              <strong>Employee ID:</strong> {selectedEmployee.employeeId}
            </p>
            <p>
              <strong>Gender:</strong> {selectedEmployee.gender}
            </p>
            <p>
              <strong>Phone Number:</strong> {selectedEmployee.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {selectedEmployee.email}
            </p>
            <p>
              <strong>Role:</strong> {selectedEmployee.role}
            </p>
            <p>
              <strong>Starting Date:</strong> {selectedEmployee.startingDate}
            </p>
            <p>
              <strong>Ending Date:</strong> {selectedEmployee.endingDate}
            </p>
            <p>
              <strong>Personal Details:</strong> {selectedEmployee.personalDetails}
            </p>
          </div>
        </div>
      )}
      {modal && (
        <EditEmployee closeModal={handleModalClose} employee={selectedEmployee} setLoader={setLoader} loader={loader} />
      )}
    </div>
  );
};

export default WithLayout(ViewEmployeeList);