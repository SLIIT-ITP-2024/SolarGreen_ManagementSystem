import React, { useState, useEffect } from "react";
import axios from "axios";
import WithLayout from "../../../hoc/WithLayout";
import "./Update.css";

const InventoryUpdateForm = ({ match }) => {
  const [formData, setFormData] = useState({
    inventoryID: "",
    inventoryName: "",
    price: "",
    noOfItems: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch inventory data to populate the form
    const fetchInventory = async () => {
      try {
        const response = await axios.put(`http://localhost:3000/api/v1/inventory/inventories/update/${match.params.id}`);
        const inventoryData = response.data;
        setFormData({
          inventoryID: inventoryData.inventoryID,
          inventoryName: inventoryData.inventoryName,
          price: inventoryData.price.toString(),
          noOfItems: inventoryData.noOfItems.toString(),
        });
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventory();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.put(`http://localhost:3000/api/v1/inventory/inventories/update${match.params.id}`, formData);
        console.log("Inventory updated successfully");
        window.location.href = "/inventory-management";
      } catch (error) {
        console.error("Error updating inventory:", error);
      }
    } else {
      console.log("Form is not valid. Please fill in all required fields.");
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.inventoryID.trim()) {
      errors.inventoryID = "Inventory ID is required";
      valid = false;
    }
    if (!formData.inventoryName.trim()) {
      errors.inventoryName = "Inventory Name is required";
      valid = false;
    }
    if (!formData.price.trim()) {
      errors.price = "Price is required";
      valid = false;
    }
    if (!formData.noOfItems.trim()) {
      errors.noOfItems = "No Of Items is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

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
        <h2>Update Inventory</h2>
        <div className="form-group">
          <label htmlFor="inventoryID">Inventory ID</label>
          <input
            type="text"
            id="inventoryID"
            name="inventoryID"
            value={formData.inventoryID}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.inventoryID && <span className="error">{errors.inventoryID}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="inventoryName">Inventory Name</label>
          <input
            type="text"
            id="inventoryName"
            name="inventoryName"
            value={formData.inventoryName}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.inventoryName && <span className="error">{errors.inventoryName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="noOfItems">No of items</label>
          <input
            type="number"
            id="noOfItems"
            name="noOfItems"
            value={formData.noOfItems}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.noOfItems && <span className="error">{errors.noOfItems}</span>}
        </div>
        
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default WithLayout(InventoryUpdateForm);

