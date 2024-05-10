import React from "react";
import jsPDF from "jspdf";

//npm install jspdf

const PDF = ({ project }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Define content for the PDF
    const content = `

    Project ID: ${project.projectID}
    Customer ID: ${project.customerID}
    Customer Name: ${project.customerName}
    Project Type: ${project.projectType}
    Project Size: ${project.projectSize}
    Estimated Cost (Rs.): ${project.estimatedCost}
    Estimated Duration (days): ${project.estimatedDuration}
    Status: ${project.status}
    Comments: ${project.comments}
    `;

    // Add text to the PDF document
    doc.text(content, 10, 10);

    // Save the PDF document
    doc.save(`Project_Report_${project.projectID}.pdf`);
  };

  return (
    <div>
      <h4>Project_Report - {project.projectID}</h4> <br />
      <button onClick={generatePDF} className="btn btn-warning">
        Generate PDF
      </button>
    </div>
  );
};

export default PDF;
