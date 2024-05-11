import React, { useState } from "react";
import { jsPDF } from "jspdf";
import './GenerateReports.css';
import axios from "axios";
import WithLayout from '../../../hoc/WithLayout';

function GenerateReports() {
  const [ProjectID, setProjectID] = useState("");
  const [MaintenanceID, setMaintenanceID] = useState("");
  const [HoursRequired, setHoursRequired] = useState("");
  const [CostPerHour, setCostPerHour] = useState("");
  const [error, setError] = useState(null);

  const handleGenerateReport = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/maintanance/schedules/get`);
      const schedules = res.data;

      // Filter schedules based on project ID and maintenance ID
      const filteredSchedules = schedules.filter((schedule) => {
        return schedule.ProjectID === ProjectID && schedule.MaintenanceID === MaintenanceID;
      });

      if (filteredSchedules.length === 0) {
        setError("No data found for the provided IDs.");
        return;
      }

      // Calculate estimated cost
      const estimatedCost = parseFloat(HoursRequired) * parseFloat(CostPerHour);

      // Create a new instance of jsPDF
      const doc = new jsPDF();

      // Set document metadata
      doc.setProperties({
        title: `Maintenance Report for Project ID: ${ProjectID} and Maintenance ID: ${MaintenanceID}`,
        author: "Dhivakaran Muraleswaran",
        keywords: "maintenance, report",
      });

      // Set font size and text color
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      // Set document header
      doc.text(`Maintenance Report`, 15, 15);

      // Add user input values to the report
      doc.text(`Project ID: ${ProjectID}`, 15, 30);
      doc.text(`Maintenance ID: ${MaintenanceID}`, 15, 40);
      doc.text(`Hours Required: ${HoursRequired}`, 15, 50);
      doc.text(`Cost Per Hour: ${CostPerHour}`, 15, 60);
      doc.text(`Estimated Cost: ${estimatedCost}`, 15, 70);

      // Iterate over filtered schedules and add details to the PDF
      let yPos = 90; // Adjust yPos to avoid overlapping with user input values
      filteredSchedules.forEach((schedule) => {
        doc.text(`Team ID: ${schedule.TeamID}`, 15, yPos);
        doc.text(`Task: ${schedule.Task}`, 15, yPos + 10);
        doc.text(`Location: ${schedule.Location}`, 15, yPos + 20);
        doc.text(`Date: ${schedule.Date}`, 15, yPos + 30);
        doc.text(`Status: ${schedule.Status}`, 15, yPos + 40);
        doc.line(15, yPos + 50, 200, yPos + 50);
        yPos += 60;
      });

      // Save the document
      doc.save(`maintenance_report_${ProjectID}_${MaintenanceID}.pdf`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Generate Report</h1>
      <div className="form-group">
        <label htmlFor="projectID">Project ID:</label>
        <input
          type="text"
          className="form-control"
          id="projectID"
          value={ProjectID}
          onChange={(e) => setProjectID(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="maintenanceID">Maintenance ID:</label>
        <input
          type="text"
          className="form-control"
          id="maintenanceID"
          value={MaintenanceID}
          onChange={(e) => setMaintenanceID(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="hoursRequired">Hours Required:</label>
        <input
          type="text"
          className="form-control"
          id="hoursRequired"
          value={HoursRequired}
          onChange={(e) => setHoursRequired(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="costPerHour">Cost Per Hour:</label>
        <input
          type="text"
          className="form-control"
          id="costPerHour"
          value={CostPerHour}
          onChange={(e) => setCostPerHour(e.target.value)}
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary" onClick={handleGenerateReport}>
        Generate Report
      </button>
    </div>
  );
}

export default WithLayout(GenerateReports);

