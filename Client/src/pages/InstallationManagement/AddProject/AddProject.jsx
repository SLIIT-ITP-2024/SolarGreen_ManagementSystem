import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WithLayout from "../../../hoc/WithLayout";
import "./AddProject.css";
import SolarWaterHeatingEquipment from "../../../components/InstallationManagement/EquipmentDetails/SolarWaterHeatingEquipment";
import ResidentialRooftopSolarPVEquipment from "../../../components/InstallationManagement/EquipmentDetails/ResidentialRooftopSolarPVEquipment";
import SolarStreetLightingEquipment from "../../../components/InstallationManagement/EquipmentDetails/SolarStreetLightingEquipment";

function AddProject() {
  // Validation
  const [cID, setCID] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState("");
  const [customer, setCustomer] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Form
  const [customerID, setCustomerID] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [projectID, setProjectID] = useState("");
  const [date, setDate] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [status, setStatus] = useState("Pending");
  const [cost, setCost] = useState(null);
  const [duration, setDuration] = useState(null);
  const [comments, setComments] = useState("");

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/installation/customers/get"
      );
      setCustomers(response.data); // Assuming response.data is an array of student objects
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Validation of customer ID
  const validate = async (e) => {
    e.preventDefault();

    if (cID === "") {
      setMessage("Please enter a Customer ID!");
      return;
    }

    // Check if the project ID exists in the list of students
    const validCustomer = customers.find(
      (customer) => customer.customerID === cID
    );

    if (validCustomer) {
      setCustomer(validCustomer);
      setCustomerID(validCustomer.customerID);
      setCustomerName(validCustomer.customerName);
      setMessage("Valid Customer ID!");
      setValid(true);
    } else {
      setMessage("Invalid Customer ID!");
      setValid(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Fetching the existing projects to calculate the next project ID
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/installation/projects/get")
      .then((res) => {
        const projects = res.data;
        if (projects.length > 0) {
          const lastProjectID = projects[projects.length - 1].projectID;
          // Extract the numeric part of the last student ID and increment it by 1
          const numericPart = parseInt(lastProjectID.substring(1), 10) + 1;
          // Generate the next student ID with leading zeros
          setProjectID(`P${String(numericPart).padStart(3, "0")}`);
        } else {
          // If there are no existing students, start with S001
          setProjectID("P001");
        }
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  //Current date
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Calculation of estimations
  const handleCalculate = () => {
    // Validation
    if (projectSize === "" || projectSize === "") {
      alert("Fill out Project Type and Project Size!");
      return;
    }

    let calculatedCost = null;
    let calculatedDuration = null;

    if (projectType === "Solar Water Heating System") {
      calculatedCost = 5000; // Cost for Solar Water Heating System
      calculatedDuration = 7; // Duration in days
    } else if (projectType === "Residential Rooftop Solar PV System") {
      calculatedCost = 10000; // Cost for Residential Rooftop Solar PV System
      calculatedDuration = 14; // Duration in days
    } else if (projectType === "Solar Street Lighting System") {
      calculatedCost = 8000; // Cost for Solar Street Lighting System
      calculatedDuration = 10; // Duration in days
    }

    // Project size
    if (projectSize === "Large") {
      calculatedCost *= 1.2; // Increase cost by 20% for large projects
      calculatedDuration *= 1.3; // Increase duration by 10% for large projects
    } else if (projectSize === "Medium") {
      calculatedCost *= 1.1; // Increase cost by 20% for medium projects
      calculatedDuration *= 1.2; // Increase duration by 10% for medium projects
    }

    calculatedDuration = Math.ceil(calculatedDuration);

    setCost(calculatedCost);
    setDuration(calculatedDuration);
  };

  function sendData(e) {
    e.preventDefault();

    // Validation
    if (
      !projectType ||
      !projectSize ||
      cost === null ||
      duration === null ||
      comments === ""
    ) {
      alert("Please fill out all fields!");
      return;
    }

    const newProject = {
      customerID,
      customerName,
      projectID,
      date: getCurrentDate(),
      projectType,
      projectSize,
      status,
      estimatedCost: cost,
      estimatedDuration: duration,
      comments,
    };

    // console.log("New Project Data:", newProject);

    axios
      .post(
        "http://localhost:3000/api/v1/installation/projects/add",
        newProject
      )
      .then(() => {
        alert("Project Added!");
        window.location.href = "/installation-management";
      })
      .catch((err) => {
        console.error("Error adding project:", err);
        alert("Failed to add project. Please try again.");
      });
  }

  return (
    <div className="container">
      <form onSubmit={validate}>
        <div className="form-group">
          <label for="name">Customer ID</label>
          <input
            type="text"
            className="form-control"
            id="cID"
            placeholder="Enter customer ID (Cxxx)"
            value={cID}
            onChange={(e) => setCID(e.target.value)}
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

          <div className="container">
            <h3 className="createTitle">Create Project</h3>

            <form onSubmit={sendData}>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="cID">Customer ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="customerID"
                      value={customer.customerID}
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
                      id="customerName"
                      value={customer.customerName}
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
                      id="projectID"
                      value={projectID}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="age">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      value={getCurrentDate()}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="gender">Project Type</label>
                    <select
                      className="form-control"
                      id="projectType"
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

              <button
                type="button"
                className="btn btn-success"
                onClick={handleCalculate}
              >
                Calculate Estimations
              </button>

              {cost !== null && duration !== null && (
                <div>
                  {projectType === "Solar Water Heating System" &&
                    projectSize !== "" && <SolarWaterHeatingEquipment />}
                  {projectType === "Residential Rooftop Solar PV System" &&
                    projectSize !== "" && (
                      <ResidentialRooftopSolarPVEquipment />
                    )}
                  {projectType === "Solar Street Lighting System" &&
                    projectSize !== "" && <SolarStreetLightingEquipment />}
                  <br />

                  <div className="form-group">
                    <label htmlFor="cost">Estimated Cost (Rs.)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimatedCost"
                      value={cost}
                      readOnly
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration">Estimated Duration (Days)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimatedDuration"
                      value={duration}
                      readOnly
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <input
                      type="text"
                      className="form-control"
                      id="comments"
                      onChange={(e) => setComments(e.target.value)}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-warning">
                    Add Project
                  </button>
                </div>
              )}
            </form>
            <br />
            <Link to={"/installation-management"} className="btn btn-warning">
              Cancel
            </Link>
          </div>
        </div>
      )}
      {/* Display validation message */}
      {!valid && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default WithLayout(AddProject);
