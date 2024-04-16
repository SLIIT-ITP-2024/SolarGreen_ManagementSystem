import WithLayout from "../../../hoc";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PDF from "./PDF";

function Report() {
  const [pID, setPID] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState("");
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);

  const testProject = {
    projectID: "123",
    customerID: "456",
    customerName: "John Doe",
    projectType: "Solar Water Heating System",
    projectSize: "Large",
    estimatedCost: 5000,
    estimatedDuration: 7,
    status: "Pending",
    comments: "Additional comments...",
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/installation/projects/get"
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const validate = async (e) => {
    e.preventDefault();
    // Check if the project ID exists in the list of students
    const validProject = projects.find((project) => project.projectID === pID);

    if (validProject) {
      setProject(validProject);
      setPID(validProject.projectID);
      setMessage("Valid Project ID!");
      setValid(true);
    } else {
      setMessage("Invalid Project ID!");
      setValid(false);
    }
  };

  return (
    <div>
      <h3>Generate report</h3>
      <div className="container">
        <form onSubmit={validate}>
          <div className="form-group">
            <label for="name">Project ID</label>
            <input
              type="text"
              className="form-control"
              id="pID"
              placeholder="Enter project ID"
              value={pID}
              onChange={(e) => setPID(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Validate ID
          </button>
        </form>

        {/* Display validation message */}
        {valid && (
          <div>
            <p className="mt-3">{message}</p>
            <PDF project={project} />
          </div>
        )}

        {/* Display invalidation message */}
        {!valid && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
}

export default WithLayout(Report);
