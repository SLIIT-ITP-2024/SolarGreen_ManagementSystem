import WithLayout from "../../../hoc";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PDF from "./InvenPDF";

function GenerateReport() {
  const [iID, setIID] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState("");
  const [inventory, setInventory] = useState([]);
  const [inventories, setInventories] = useState([]);

  const testInventory = {
    inventoryID: "a13",
    inventoryName: "Battery",
    price: "7500",
    noOfItems: "10",
  };

  const fetchInventories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/inventory/inventories/get"
      );
      setInventories(response.data);
    } catch (error) {
      console.error("Error fetching inventories:", error);
    }
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  const validate = async (e) => {
    e.preventDefault();
    // Check if the inventory ID exists in the list of inventories
    const validInventory = inventories.find((inventory) => inventory.inventoryID === iID);

    if (validInventory) {
      setInventory(validInventory);
      setIID(validInventory.inventoryID);
      setMessage("Valid Inventory ID!");
      setValid(true);
    } else {
      setMessage("Invalid Inventory ID!");
      setValid(false);
    }
  };

  return (
    <div>
      <h3>Generate report</h3>
      <div className="container">
        <form onSubmit={validate}>
          <div className="form-group">
            <label for="name">Inventory ID</label>
            <input
              type="text"
              className="form-control"
              id="iID"
              placeholder="Enter inventory ID"
              value={iID}
              onChange={(e) => setIID(e.target.value)}
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
            <PDF inventory={inventory} />
          </div>
        )}

        {/* Display invalidation message */}
        {!valid && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
}

export default WithLayout(GenerateReport);
