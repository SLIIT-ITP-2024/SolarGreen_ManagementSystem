import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const [employeeName, setEmployeeName] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [gender, setGender] = useState('Male');
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const [personalDetails, setPersonalDetails] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/addEmployee', {
        employeeName,
        employeeId,
        gender,
        phoneNumber,
        email,
        role,
        startingDate,
        endingDate,
        personalDetails
      })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const Cancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const genderOnChange = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };

  return (
    <div className="w-full h-full bg-white p-20">
      <form onSubmit={Submit} onClick={Cancel}>
        <h2>Add Employee</h2>
        <div className="mb-2">
          <label htmlFor="">Employee Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Employee ID</label>
          <input
            type="text"
            placeholder="Enter Employee ID"
            className="form-control"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Gender</label>
          <div className="select is full-width">
            <select value={gender} onChange={genderOnChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Role</label>
          <input
            type="text"
            placeholder="Enter Role"
            className="form-control"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Stating Date</label>
          <input
            type="date"
            placeholder="Enter Starting Date"
            className="form-control"
            onChange={(e) => setStartingDate(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Ending Date</label>
          <input
            type="date"
            placeholder="Enter Ending Date"
            className="form-control"
            onChange={(e) => setEndingDate(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Personal Details</label>
          <input
            type="text"
            placeholder="Enter Details"
            className="form-control"
            onChange={(e) => setPersonalDetails(e.target.value)}
          />
        </div>
        <button className="bg-solo-green px-5 py-2 rounded-2xl font-bold">Submit</button>
        <button className="bg-solo-green px-5 py-2 rounded-2xl font-bold">Cancel</button>
      </form>
    </div>
  );
};

export default Employees;
