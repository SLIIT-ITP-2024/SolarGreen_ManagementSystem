import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchProject.css";

const SearchProject = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    function getProjects() {
      axios
        .get("http://localhost:3000/api/v1/installation/projects/get")
        .then((res) => {
          setAllProjects(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getProjects();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // If the search term is empty, display an error message
    if (!searchTerm.trim()) {
      setError("Please enter a search term");
      setSearchResults([]); // Reset search results
      return;
    }

    // Filter projects based on customer names that contain the search term
    const filteredProjects = allProjects.filter((project) =>
      project.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredProjects);

    if (filteredProjects.length === 0) {
      setError("No projects found");
    } else {
      setError(null);
    }
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
    filterProjects(searchTerm, status);
  };

  const filterProjects = (searchTerm, statusFilter) => {
    let filteredProjects = allProjects;

    if (searchTerm.trim()) {
      filteredProjects = filteredProjects.filter((project) =>
        project.customerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      filteredProjects = filteredProjects.filter(
        (project) => project.status === statusFilter
      );
    }

    setSearchResults(filteredProjects);

    if (filteredProjects.length === 0) {
      setError("No projects found");
    } else {
      setError(null);
    }
  };

  return (
    <div className="container1">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-component">
          <input
            type="text"
            className="form-control search"
            placeholder="Enter customer name"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-warning searchBtn" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Filter Options */}
      <div className="mt-3">
        <label htmlFor="msg" className="form-check-label">
          Filter Projects by Status:
        </label>
        <div className="form-check">
          <input
            type="radio"
            id="completed"
            name="statusFilter"
            value="Completed"
            checked={statusFilter === "Completed"}
            onChange={() => handleStatusFilterChange("Completed")}
            className="form-check-input"
          />
          <label htmlFor="completed" className="form-check-label">
            Completed
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="pending"
            name="statusFilter"
            value="Pending"
            checked={statusFilter === "Pending"}
            onChange={() => handleStatusFilterChange("Pending")}
            className="form-check-input"
          />
          <label htmlFor="pending" className="form-check-label">
            Pending
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="terminated"
            name="statusFilter"
            value="Terminated"
            checked={statusFilter === "Terminated"}
            onChange={() => handleStatusFilterChange("Terminated")}
            className="form-check-input"
          />
          <label htmlFor="terminated" className="form-check-label">
            Terminated
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="on hold"
            name="statusFilter"
            value="On hold"
            checked={statusFilter === "On hold"}
            onChange={() => handleStatusFilterChange("On hold")}
            className="form-check-input"
          />
          <label htmlFor="on hold" className="form-check-label">
            On hold
          </label>
        </div>
      </div>

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div>
          <p className="result">Search Results...</p>
          {searchResults.map((project) => (
            <div className="container">
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th>ProjectID</th>
                    <th>CustomerID</th>
                    <th>CustomerName</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Est. Cost</th>
                    <th>Est. Duration</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={project._id}>
                    <td>{project.projectID}</td>
                    <td>{project.customerID}</td>
                    <td>{project.customerName}</td>
                    <td>{project.date}</td>
                    <td>{project.projectType}</td>
                    <td>{project.projectSize}</td>
                    <td>{project.status}</td>
                    <td>{project.estimatedCost}</td>
                    <td>{project.estimatedDuration}</td>
                    <td>{project.comments}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {!searchResults.length > 0 && error && <p className="result">{error}</p>}
    </div>
  );
};

export default SearchProject;
