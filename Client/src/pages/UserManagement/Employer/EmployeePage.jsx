import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function employeePage () {
    const [employeePage, setEmployeePage] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setEmployeePage(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete =(id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }
    
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-#D5E9E8 rounded p-3">
                <Link to="/create" className="btn btn-success">Add Employee +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee ID</th>
                            <th>Gender</th>
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
                        {
                            employeePage.map((user) => {
                                <tr>
                                    <td>{employeePage.employeeName}</td>
                                    <td>{employeePage.employeeID}</td>
                                    <td>{employeePage.gender}</td>
                                    <td>{employeePage.phoneNumber}</td>
                                    <td>{employeePage.email}</td>
                                    <td>{employeePage.role}</td>
                                    <td>{employeePage.startingDate}</td>
                                    <td>{employeePage.endingDate}</td>
                                    <td>{employeePage.personalDetails}</td>
                                    <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success"><i className="bi bi-pencil-square"></i></Link>
                                    <button className="btn btn-danger" 
                                    onClick={(e) => handleDelete(user._id)}><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default employeePage;