import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tables.css";
import { Link } from "react-router-dom";

function AllProjects() {
  const [projects, setProjects] = useState([]);

  // Get all projects
  useEffect(() => {
    function getProjects() {
      axios
        .get("http://localhost:3000/api/v1/installation/projects/get")
        .then((res) => {
          // console.log(res.data);
          setProjects(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getProjects();
  }, []);

  //Delete a project
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/installation/projects/delete/:id`
        );
        // Remove the deleted student from the state
        setProjects(projects.filter((project) => project._id !== id));
      } catch (error) {
        console.error("Error deleting record:", error);
        alert("An error occurred while deleting the record");
      }
    }
  };

  return (
    <div className="container">
      <br></br>
      <h3>Projects</h3>
      <table>
        <thead>
          <tr>
            <th>ProjectID</th>
            <th>CustomerID</th>
            <th>CustomerName</th>
            <th>Date</th>
            <th>Type</th>
            <th>Size</th>
            <th>Status</th>
            <th>Est. Cost</th>
            <th>Est. Duration</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{project.projectID}</td>
              <td>{project.customerID}</td>
              <td>{project.customerName}</td>
              <td>{project.date}</td>
              <td>{project.projectType}</td>
              <td>{project.projectSize}</td>
              <td>{project.status}</td>
              <td>{project.estimatedCost}</td>
              <td>{project.estimatedDuration}</td>
              <td>{project.comments}</td>
              <td>
                {/* <Link
                  to={`/update/${project._id}/`}
                  className="btn btn-success"
                >
                  Update
                </Link> */}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProjects;
