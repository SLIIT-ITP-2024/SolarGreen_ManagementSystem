import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import axios from "axios";
import WithLayout from "../../../hoc/WithLayout";
import "./Update.css";

const UpdateForm = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [formData, setFormData] = useState({
    MaintenanceID: "",
    TeamID: "",
    Task: "",
    Location: "",
    Date: "",
    Status: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch schedule data from the server
    const fetchSchedule = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/maintanance/schedules/get/${id}`
        );
        setFormData(data.schedule);
        console.log("Schedule data:", data.schedule.ProjectID);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, [id]); // Fetch data whenever id changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send form data to the server for updating
        await axios.put(
          `http://localhost:3000/api/v1//maintanance/schedules/update/${id}`,
          formData
        );
        console.log("Schedule updated successfully");
        
        // Redirect or perform other actions after successful submission
        window.location.href = "/maintenance-management";
      } catch (error) {
        console.error("Error updating schedule:", error);
      }
    } else {
      console.log("Form is not valid. Please fill in all required fields.");
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    for (const key in formData) {
      // Check if the value is a string and not empty
      if (typeof formData[key] === "string" && !formData[key].trim()) {
        errors[key] = `${key} is required`;
        valid = false;
      }

      setErrors(errors);
      return valid;
    }

    setErrors(errors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Maintenance Update Form</h2>
        {Object.keys(formData).map((key) => {
          if (key !== "_id" && key !== "__v") {
            return (
              <div key={key} className="form-group">
                <label htmlFor={key}>{key}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors[key] && <span className="error">{errors[key]}</span>}
              </div>
            );
          }
          return null; // Exclude _id and __v fields
        })}
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WithLayout(UpdateForm);
