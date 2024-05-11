import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [allSchedules, setAllSchedules] = useState([]);

  useEffect(() => {
    function getSchedules() {
      axios
        .get("http://localhost:3000/api/v1/maintanance/schedules/get")
        .then((res) => {
          setAllSchedules(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getSchedules();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  
    // Filter Schedules based on Maintenance IDs that contain the search term
    const filteredSchedules = allSchedules.filter((schedule) =>
     
      schedule.MaintenanceID.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    setSearchResults(filteredSchedules);
  
    if (!filteredSchedules.length) {
      setError("No Schedules found");
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
            placeholder="Enter Maintenance ID"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div>
          <p className="result">Search Results...</p>

          {searchResults.map((schedule) => (
            <div>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>ProjectID</th>
                    <th>MaintenanceID</th>
                    <th>TeamID</th>
                    <th>Task</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>

                  </tr>
                </thead>
                <tbody>
                  <tr key={schedule._id}>
                    <td>{schedule.ProjectID}</td>
                    <td>{schedule.MaintenanceID}</td>
                    <td>{schedule.TeamID}</td>
                    <td>{schedule.Task}</td>
                    <td>{schedule.Location}</td>
                    <td>{schedule.Date}</td>
                    <td>{schedule.Status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {!searchResults.length > 0 && error !== null && (
        <p className="result">{error}</p>
      )}
    </div>
  );
};

export default Search;