import React, { useState, useEffect } from "react";
import axios from "axios";
import WithLayout from "../../../hoc/WithLayout";
import "./Update.css";

const Update = () => {
  // State for form data
  const [formData, setFormData] = useState({
    InventoryID: "",
    InventoryName: "",
    Price: "",
    Noofitems: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.put(`http://localhost:3000/api/v1/inventory/inventories/update/${formData.inventoryID}`, formData);
        console.log("Schedule updated successfully");
        // Clear form data after successful submission
        setFormData({
            InventoryID: "",
            InventoryName: "",
            Price: "",
            Noofitems: "",
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
    if (!formData.InventoryID.trim()) {
      errors.inventoryID = "Inventory ID is required";
      valid = false;
    }
    if (!formData.InventoryName.trim()) {
      errors.InventoryName = "Inventory name is required";
      valid = false;
    }
    if (!formData.Price.trim()) {
      errors.Price = "Price is required";
      valid = false;
    }
    if (!formData.Noofitems.trim()) {
      errors.Noofitems = "No of items is required";
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
          <label htmlFor="InventoryID">Inventory ID</label>
          <input
            type="text"
            id="InventoryID"
            name="InventoryID"
            value={formData.InventoryID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.InventoryID && <span className="error">{errors.InventoryID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="InventoryName">Inventory Name</label>
          <input
            type="text"
            id="InventoryName"
            name="InventoryName"
            value={formData.InventoryName}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.InventoryName && <span className="error">{errors.InventoryName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Price">Price</label>
          <input
            type="number"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.Price && <span className="error">{errors.Price}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Noofitems">No of items</label>
          <input
            type="number"
            id="Noofitems"
            name="Noofitems"
            value={formData.Noofitems}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.Noofitems && <span className="error">{errors.Noofitems}</span>}
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default WithLayout(Update);