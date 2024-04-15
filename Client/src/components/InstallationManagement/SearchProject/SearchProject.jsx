import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchProject.css";

const SearchProject = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [allProjects, setAllProjects] = useState([]);

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

    // Filter projects based on customer names that contain the search term
    const filteredProjects = allProjects.filter((project) =>
      project.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredProjects);
  };

  return (
    <div className="container mt-4">
      <h3>Project Search</h3>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter customer name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      {/* Display Search Results */}
      {searchResults.length > 0 ? (
        <div>
          <h4>Search Results</h4>

          {searchResults.map((project) => (
            <div>
              <br />
              <table>
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
      ) : (
        <p>No projects found.</p>
      )}

      {/* Display Error Message */}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default SearchProject;
