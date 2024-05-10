import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WithLayout from "../../hoc/WithLayout";
import "./Estimation/Estimations.css";

function Estimations() {
  const [projects, setProjects] = useState([]);

  // Get all projects
  useEffect(() => {
    async function getProjects() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/installation/projects/get"
        );
        setProjects(res.data);
      } catch (err) {
        alert(err.message);
      }
    }

    getProjects();
  }, []);

  // Generate EstimationID starting with E001 and incrementing
  const generateEstimationID = (index) => {
    return `E${(index + 1).toString().padStart(3, "0")}`;
  };

  // Delete a project
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/installation/projects/delete/${id}`
        );
        setProjects(projects.filter((project) => project._id !== id));
      } catch (error) {
        console.error("Error deleting record:", error);
        alert("An error occurred while deleting the record");
      }
    }
  };

  return (
    <div>
      <h3>Estimations</h3>
      <table className="table">
        <thead>
          <tr>
            <th>EstimationID</th>
            <th>ProjectID</th>
            <th>CustomerID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Est. Cost</th>
            <th>Est. Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{generateEstimationID(index)}</td>
              <td>{project.projectID}</td>
              <td>{project.customerID}</td>
              <td>{project.date}</td>
              <td>{project.status}</td>
              <td>{project.estimatedCost}</td>
              <td>{project.estimatedDuration}</td>
              <td>
                <Link
                  to={`/installation-management/update-project/${project._id}`}
                  className="btn btn-warning"
                >
                  Update
                </Link>
                <br />
                <button
                  type="button"
                  className="btn btn-warning btn-delete"
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

export default WithLayout(Estimations);
