import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "../Table/Tables.css";

function ProjectStatusChart() {
  const [projects, setProjects] = useState([]);
  const [statusCounts, setStatusCounts] = useState({
    completed: 0,
    onHold: 0,
    terminated: 0,
    pending: 0,
  });

  // Get all projects and update status counts
  useEffect(() => {
    async function getProjects() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/installation/projects/get"
        );
        setProjects(res.data);
      } catch (err) {
        alert(err.message);
      }
    }

    getProjects();
  }, []);

  // Update status counts when projects change
  useEffect(() => {
    const countStatus = () => {
      const completed = projects.filter(
        (project) => project.status === "Completed"
      ).length;
      const onHold = projects.filter(
        (project) => project.status === "On hold"
      ).length;
      const terminated = projects.filter(
        (project) => project.status === "Terminated"
      ).length;
      const pending = projects.filter(
        (project) => project.status === "Pending"
      ).length;

      console.log(completed);

      setStatusCounts({
        completed,
        onHold,
        terminated,
        pending,
      });
    };

    countStatus();
  }, [projects]); // Run when projects change

  // Data for Pie chart
  const data = {
    labels: ["Completed", "On Hold", "Terminated", "Pending"],
    datasets: [
      {
        label: "Project Status",
        data: [
          statusCounts.completed,
          statusCounts.onHold,
          statusCounts.terminated,
          statusCounts.pending,
        ],
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
    <div>
      <h4 className="header">Project Status</h4>
      <div style={{ height: "300px", width: "300px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default ProjectStatusChart;
