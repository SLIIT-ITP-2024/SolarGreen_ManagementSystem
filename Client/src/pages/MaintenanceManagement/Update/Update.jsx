import React, { useState, useEffect } from "react";
import axios from "axios";
import WithLayout from "../../../hoc/WithLayout";
import "./Update.css";

const UpdateForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    ProjectID: "",
    MaintenanceID: "",
    TeamID: "",
    Task: "",
    Location: "",
    Date: "",
    Status: "Pending"
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for the ID of the schedule to be updated
  const [MaintenanceID, setMaintenanceID] = useState(null);

  // Function to fetch schedule details when component mounts
  useEffect(() => {
    const fetchScheduleDetails = async () => {
      try {
        // Fetch schedule details using the MaintenanceID
        const response = await axios.get(`http://localhost:3000/api/v1/maintanance/schedules/${formData.MaintenanceID}`);
        // Populate form fields with fetched schedule details
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching schedule details:", error);
      }
    };

    // Call the fetchScheduleDetails function if MaintenanceID is not empty
    if (formData.MaintenanceID !== "") {
      fetchScheduleDetails();
    }
  }, [formData.MaintenanceID]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (MaintenanceID) {
          // Update schedule if MaintenanceID exists
          await axios.put(`http://localhost:3000/api/v1/maintanance/schedules/${MaintenanceID}`, formData);
          console.log("Schedule updated successfully");
        } else {
          // Create new schedule if MaintenanceID is null
          await axios.post("http://localhost:3000/api/v1/maintanance/schedules/add", formData);
          console.log("Schedule created successfully");
        }
        // Clear form data after successful submission
        setFormData({
          ProjectID: "",
          MaintenanceID: "",
          TeamID: "",
          Task: "",
          Location: "",
          Date: "",
          Status: "Pending"
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
    if (!formData.ProjectID.trim()) {
      errors.ProjectID = "Project ID is required";
      valid = false;
    }
    if (!formData.MaintenanceID.trim()) {
      errors.MaintenanceID = "Maintenance ID is required";
      valid = false;
    }
    if (!formData.TeamID.trim()) {
      errors.TeamID = "Team ID is required";
      valid = false;
    }
    if (!formData.Task.trim()) {
      errors.Task = "Task is required";
      valid = false;
    }
    if (!formData.Location.trim()) {
      errors.Location = "Location is required";
      valid = false;
    }
    if (!formData.Date.trim()) {
      errors.Date = "Date is required";
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
          <label htmlFor="ProjectID">Project ID</label>
          <input
            type="text"
            id="ProjectID"
            name="ProjectID"
            value={formData.ProjectID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.ProjectID && <span className="error">{errors.ProjectID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="MaintenanceID">Maintenance ID</label>
          <input
            type="text"
            id="MaintenanceID"
            name="MaintenanceID"
            value={formData.MaintenanceID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.MaintenanceID && <span className="error">{errors.MaintenanceID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="TeamID">Team ID</label>
          <input
            type="text"
            id="TeamID"
            name="TeamID"
            value={formData.TeamID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.TeamID && <span className="error">{errors.TeamID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Task">Task</label>
          <input
            type="text"
            id="Task"
            name="Task"
            value={formData.Task}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.Task && <span className="error">{errors.Task}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.Location && <span className="error">{errors.Location}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Date">Date</label>
          <input
            type="text"
            id="Date"
            name="Date"
            value={formData.Date}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.Date && <span className="error">{errors.Date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Status">Status</label>
          <input
            type="text"
            id="Status"
            name="Status"
            value={formData.Status}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.Status && <span className="error">{errors.Status}</span>}
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default WithLayout(UpdateForm);
