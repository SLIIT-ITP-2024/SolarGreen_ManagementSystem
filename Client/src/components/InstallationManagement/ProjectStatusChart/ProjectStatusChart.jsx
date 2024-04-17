import React from "react";
import { Pie } from "react-chartjs-2";

function ProjectStatusChart() {
  const data = {
    labels: ["Completed", "On Hold", "Terminated", "Pending"],
    datasets: [
      {
        label: "Project Status",
        data: [20, 15, 10, 5], // Example data values (can be dynamic)
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336", "#2196F3"], // Colors for each status
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: "right",
    },
  };
  return (
    <div style={{ height: "400px", width: "400px" }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default ProjectStatusChart;
