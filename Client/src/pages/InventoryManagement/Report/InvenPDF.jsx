import React from "react";
import jsPDF from "jspdf";

//npm install jspdf

const InvenPDF = ({ inventory }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Define content for the PDF
    const content = `

    Inventory ID: ${inventory.inventoryID}
    Inventory Name: ${inventory.inventoryName}
    Price: ${inventory.price}
    No of items: ${inventory.noOfItems}
    `;

    // Add text to the PDF document
    doc.text(content, 10, 10);

    // Save the PDF document
    doc.save(`Inventory_Report_${inventory.inventoryID}.pdf`);
  };

  return (
    <div>
      <h4>Inventory_Report - {inventory.inventoryID}</h4> <br />
      <button onClick={generatePDF} className="btn btn-warning">
        Generate PDF
      </button>
    </div>
  );
};

export default InvenPDF;