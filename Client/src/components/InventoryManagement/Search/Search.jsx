import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [allInventories, setAllInventories] = useState([]);

  useEffect(() => {
    function getInventories() {
      axios
        .get("http://localhost:3000/api/v1/inventory/inventories/get")
        .then((res) => {
          setAllInventories(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getInventories();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Filter inventories based on inventory names that contain the search term
    const filteredInventories = allInventories.filter((inventory) =>
      inventory.inventoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredInventories);

    if (!searchResults.length > 0) {
      setError("No inventories found");
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
            placeholder="Enter inventory"
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

          {searchResults.map((inventory) => (
            <div>
              <br />
              <table>
                <thead>
                  <tr>
                        <th>Inventory ID</th>
                        <th>Inventory Name</th>
                        <th>Price</th>
                        <th>Number of Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={inventory._id}>
                    <td>{inventory.inventoryID}</td>
                    <td>{inventory.inventoryName}</td>
                    <td>{inventory.price}</td>
                    <td>{inventory.noOfItems}</td>
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