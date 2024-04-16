import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import WithLayout from "../../../hoc/WithLayout";
import "../AddProject/AddProject.css";

function UpdateProject() {
  const { id } = useParams();
  const [customerID, setCustomerID] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [projectID, setProjectID] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [estimatedCost, setEstimatedCost] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState("");
  const [status, setStatus] = useState("Pending");
  const [comments, setComments] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/installation/projects/get/${id}`)
      .then((res) => {
        const project = res.data.project;
        setCustomerID(project.customerID);
        setCustomerName(project.customerName);
        setProjectID(project.projectID);
        setProjectType(project.projectType);
        setProjectSize(project.projectSize);
        setEstimatedCost(project.estimatedCost);
        setEstimatedDuration(project.estimatedDuration);
        setStatus(project.status);
        setComments(project.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function updateData(e) {
    e.preventDefault();

    const updatedProject = {
      customerID,
      customerName,
      projectID,
      projectType,
      projectSize,
      status,
      estimatedCost,
      estimatedDuration,
      comments,
    };

    axios
      .put(
        `http://localhost:3000/api/v1/installation/projects/update/${id}`,
        updatedProject
      )
      .then(() => {
        alert("Project Updated!");
        window.location.href = "/installation-management";
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleCalculate = () => {
    let calculatedCost = null;
    let calculatedDuration = null;
    if (projectType === "Solar Water Heating System") {
      calculatedCost = 5000; // Example cost for Solar Water Heating System
      calculatedDuration = 7; // Example duration in days
    } else if (projectType === "Residential Rooftop Solar PV System") {
      calculatedCost = 10000; // Example cost for Residential Rooftop Solar PV System
      calculatedDuration = 14; // Example duration in days
    } else if (projectType === "Solar Street Lighting System") {
      calculatedCost = 8000; // Example cost for Solar Street Lighting System
      calculatedDuration = 10; // Example duration in days
    }

    // Placeholder logic for considering project size
    if (projectSize === "Large") {
      calculatedCost *= 1.2; // Increase cost by 20% for large projects
      calculatedDuration *= 1.1; // Increase duration by 10% for large projects
    }

    calculatedDuration = Math.ceil(calculatedDuration);

    setEstimatedCost(calculatedCost);
    setEstimatedDuration(calculatedDuration);
  };

  useEffect(() => {
    handleCalculate();
  }, [projectType, projectSize]);

  return (
    <div className="container">
      <h3>Update Project</h3>
      <form onSubmit={updateData}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="cID">Customer ID</label>
              <input
                type="text"
                className="form-control"
                id="cID"
                value={customerID}
                readOnly
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="cName">Customer Name</label>
              <input
                type="text"
                className="form-control"
                id="cName"
                value={customerName}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="cID">Project ID</label>
              <input
                type="text"
                className="form-control"
                id="pID"
                value={projectID}
                readOnly
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="gender">Project Status</label>
              <select
                className="form-control"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="On hold">On hold</option>
                <option value="On hold">Terminated</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="gender">Project Type</label>
              <select
                className="form-control"
                id="pType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Solar Water Heating System">
                  Solar Water Heating System
                </option>
                <option value="Residential Rooftop Solar PV System">
                  Residential Rooftop Solar PV System
                </option>
                <option value="Solar Street Lighting System">
                  Solar Street Lighting System
                </option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="projectSize">Project Size</label>
              <select
                className="form-control"
                id="projectSize"
                value={projectSize}
                onChange={(e) => setProjectSize(e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cost">Estimated Cost (Rs.)</label>
          <input
            type="text"
            className="form-control"
            id="estimatedCost"
            value={estimatedCost}
            onChange={(e) => setEstimatedCost(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Estimated Duration (Days)</label>
          <input
            type="text"
            className="form-control"
            id="estimatedDuration"
            value={estimatedDuration}
            onChange={(e) => setEstimatedDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <input
            type="text"
            className="form-control"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary">Update</button> <br />
        <Link to={`/`} className="btn btn-primary">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default WithLayout(UpdateProject);
