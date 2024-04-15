import React, { useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDetailsClick = (employeeId) => {
    axios.get(`http://localhost:3001/employees/${employeeId}`)
      .then(response => {
        setSelectedEmployee(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Role</th>
            <th>Starting Date</th>
            <th>Ending Date</th>
            <th>Personal Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>{employee.startingDate}</td>
              <td>{employee.endingDate}</td>
              <td>{employee.personalDetails}</td>
              <td>
                <button onClick={() => handleDetailsClick(employee._id)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEmployee && (
        <div className="modal">
          <div className="modal-content">
            <h2>Employee Details</h2>
            <p><strong>Employee Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Employee ID:</strong> {selectedEmployee.employeeId}</p>
            <p><strong>Phone Number:</strong> {selectedEmployee.phoneNumber}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Role:</strong> {selectedEmployee.role}</p>
            <p><strong>Starting Date:</strong> {selectedEmployee.startingDate}</p>
            <p><strong>Ending Date:</strong> {selectedEmployee.endingDate}</p>
            <p><strong>Personal Details:</strong> {selectedEmployee.personalDetails}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
