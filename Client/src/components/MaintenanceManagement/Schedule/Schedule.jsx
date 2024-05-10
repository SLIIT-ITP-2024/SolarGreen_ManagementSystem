import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import"./Schedule.css"
import Search from '../Search/Search';

function Schedule() {
    const[schedules,setSchedules]=useState([]);

        // Get all schedules
        useEffect(() => {
          function getSchedules() {
            axios
              .get("http://localhost:3000/api/v1/maintanance/schedules/get")
              .then((res) => {
                // console.log(res.data);
                setSchedules(res.data);
              })
              .catch((err) => {
                alert(err.message);
              });
          }
      
          getSchedules();
        }, []);
      
        //Delete a schedule
        const handleDelete = async (id) => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this record?"
          );
          if (confirmDelete) {
            try {
              await axios.delete(
                `http://localhost:3000/api/v1/maintanance/schedules/delete/${id}`
              );
              // Remove the deleted student from the state
              setSchedules(schedules.filter((schedule) => schedule._id !== id));
              window.location.href = "/maintenance-management";
            } catch (error) {
              console.error("Error deleting record:", error);
              alert("An error occurred while deleting the record");
            }
          }
        };
      
  return (
    <>
    <div className="container">
        <h3><center>Maintenance Schedule</center></h3>
        <Search/>
            <button className="filter green">Filter</button>
        
        <Link to="/maintenance-management/request-form"className='btn btn-success'>Request Form</Link>
        <Link to="/maintenance-management/generate-reports"className='btn btn-success'>Generate Report</Link>
        <table className="table">
            <thead>
                <tr>
                    <th>Project_ID</th>
                    <th>Maintenance_ID</th>
                    <th>Team_ID</th>
                    <th>Task</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                    

                </tr>
            </thead>
            <tbody>
            
             
                        {schedules.map((schedule, index) => (
                         <tr key={schedule._id}>
                           <td>{schedule.ProjectID}</td>
                            <td>{schedule.MaintenanceID}</td>
                            <td>{schedule.TeamID}</td>
                            <td>{schedule.Task}</td>
                            <td>{schedule.Location}</td>
                            <td>{schedule.Date}</td>
                            <td>{schedule.Status}</td>
                            <td>
                <Link
                  to={`/maintenance-management/update-form/${schedule._id}`}
                  className="btn btn-warning"
                  style={{width:'80px'}}
                >
                  Update
                </Link>
                <button
                  type="button"
                  className="btn btn-warning btn-delete"
                  onClick={() => handleDelete(schedule._id)}
                >
                  Delete
                </button>
              </td>
                        </tr>
                        ))}
            </tbody>
        </table>  
    </div>
    </>
  )
}

export default Schedule