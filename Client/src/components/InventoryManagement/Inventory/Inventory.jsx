import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Inventory.css";
import { Link } from "react-router-dom";
import Search from '../Search/Search';

function Inventory() {
    const [inventories, setInventories] = useState([]);

    // Get all inventory items
    useEffect(() => {
        function getInventories() {
            axios
                .get("http://localhost:3000/api/v1/inventory/inventories/getAll")
                .then((res) => {
                    setInventories(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }

        getInventories();
    }, []);

    //Delete an inventory item
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this record?"
        );
        if (confirmDelete) {
            try {
                await axios.delete(
                    `http://localhost:3000/api/v1/inventory/inventories/delete/${id}`
                );
                // Remove the deleted item from the state
                setInventories(inventories.filter((inventory) => inventory._id !== id));
            } catch (error) {
                console.error("Error deleting record:", error);
                alert("An error occurred while deleting the record");
            }
        }
    };

    return (

        <div className="">

            <br />

            <h3 className="header">Inventory</h3>

            <Link to="/inventory-management/create"className='btn btn-success'>Add Inventory</Link>
            <Link to="/inventory-management/generate"className='btn btn-success'>Generate Report</Link>

            <table className="table">
                <thead className="thead">
                    <tr>
                        <th>Inventory ID</th>
                        <th>Inventory Name</th>
                        <th>Price</th>
                        <th>Number of Items</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventories.map((inventory, index) => (
                        <tr key={inventory._id}>
                            <td>{inventory.inventoryID}</td>
                            <td>{inventory.inventoryName}</td>
                            <td>{inventory.price}</td>
                            <td>{inventory.noOfItems}</td>
                            <td>
                                <Link
                                    to={`/inventory-management/update-inventory/${inventory._id}`}
                                    className="btn btn-warning"
                                >
                                    Update
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-warning btn-delete"
                                    onClick={() => handleDelete(inventory._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Inventory;