import React, { useState, useEffect } from "react";
import axios from "axios";
import WithLayout from "../../../hoc/WithLayout";
import "./Update.css";

const Update = () => {
  // State for form data
  const [formData, setFormData] = useState({
    projectID: "",
    maintenanceID: "",
    teamID: "",
    task: "",
    location: "",
    date: "",
    status: "Pending"
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.put(`http://localhost:3000/api/v1/maintanance/schedules/update/${formData.projectID}`, formData);
        console.log("Schedule updated successfully");
        // Clear form data after successful submission
        setFormData({
          projectID: "",
          maintenanceID: "",
          teamID: "",
          task: "",
          location: "",
          date: "",
          status: "Pending"
        });
      } catch (error) {
        console.error("Error updating schedule:", error);
      }
    } else {
      console.log("Form is not valid. Please fill in all required fields.");
    }
  };

  // Function to validate form data
  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate each field
    if (!formData.projectID.trim()) {
      errors.projectID = "Project ID is required";
      valid = false;
    }
    if (!formData.maintenanceID.trim()) {
      errors.maintenanceID = "Maintenance ID is required";
      valid = false;
    }
    if (!formData.teamID.trim()) {
      errors.teamID = "Team ID is required";
      valid = false;
    }
    if (!formData.task.trim()) {
      errors.task = "Task is required";
      valid = false;
    }
    if (!formData.location.trim()) {
      errors.location = "Location is required";
      valid = false;
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required";
      valid = false;
    }

    // Update errors state
    setErrors(errors);
    return valid;
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Maintenance Request Form</h2>
        <div className="form-group">
          <label htmlFor="projectID">Project ID</label>
          <input
            type="text"
            id="projectID"
            name="projectID"
            value={formData.projectID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.projectID && <span className="error">{errors.projectID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="maintenanceID">Maintenance ID</label>
          <input
            type="text"
            id="maintenanceID"
            name="maintenanceID"
            value={formData.maintenanceID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.maintenanceID && <span className="error">{errors.maintenanceID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="teamID">Team ID</label>
          <input
            type="text"
            id="teamID"
            name="teamID"
            value={formData.teamID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.teamID && <span className="error">{errors.teamID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.task && <span className="error">{errors.task}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.location && <span className="error">{errors.location}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.status && <span className="error">{errors.status}</span>}
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default WithLayout(Update);
