import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios'

function UpdateUser () {
    const {id} = useParams()
    const [employeeName, setEmployeeName] = useState()
    const [employeeId, setEmployeeId] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState()
    const [startingDate, setStartingDate] = useState()
    const [endingDate, setEndingDate] = useState()
    const [personalDetails, setPersonalDetails] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
        setEmployeeName(result.data.employeeName)
        setEmployeeId(result.data.employeeId)
        setPhoneNumber(result.data.phoneNumber)
        setEmail(result.data.email)
        setRole(result.data.role)
        setStartingDate(result.data.startingDate)
        setEndingDate(result.data.endingDate)
        setPersonalDetails(result.data.personalDetails)
        })
        .catch(err => console.log(err))
    }, [])

    const Update =(e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateEmployee/"+id, {employeeName, employeeId, phoneNumber, email, role, startingDate, endingDate, personalDetails})
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
    }

    const Cancel =(e) => {
        e.preventDefault();
            navigate('/');
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <from onSubmit={Update} onClick={Cancel}>
          <h2>Update Employee Details</h2>
          <div className="mb-2">
            <label htmlFor="">Employee Name</label>
            <input type="text" className="form-control"
            value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Employee ID</label>
            <input type="text" className="form-control"
            value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="form-control"
            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" className="form-control"
            value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Role</label>
            <input type="text" className="form-control"
            value={role} onChange={(e) => setRole(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Stating Date</label>
            <input type="date" className="form-control"
            value={startingDate} onChange={(e) => setStartingDate(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Ending Date</label>
            <input type="date" className="form-control"
            value={endingDate} onChange={(e) => setEndingDate(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Personal Details</label>
            <input type="text" className="form-control"
            value={personalDetails} onChange={(e) => setPersonalDetails(e.target.value)}/>
          </div>
          <button className="btn btn-success">Update</button>
          <button className="btn btn-success">Cancel</button>
        </from>

      </div>
    </div>
    )
}

export default UpdateUser;