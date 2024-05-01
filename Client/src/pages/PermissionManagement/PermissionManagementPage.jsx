import React, { useEffect, useState } from 'react'
import WithLayout from '../../hoc'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'
import './PermissionManagementPage.scss'
import NavigationBtn from '../../components/PermissionManagement/NavigationBtn/NavigationBtn'
import SearchBar from '../../components/_Shared/SearchBar/SearchBar'
import DataCard from '../../components/PermissionManagement/DataCard/DataCard'
import AddRoleBtn from '../../components/PermissionManagement/addRoleBtn/AddRoleBtn'
import axios from 'axios'

const PermissionManagementPage = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const[activeUserCount, setActiveUserCount] = useState(0);

    useEffect(() => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
      
        // Check if token exists
        if (token) {
          // Set Authorization header for Axios request
          axios.defaults.headers.common['Authorization'] = `${token}`;
      
          // Make the API request
          axios.get('http://localhost:3000/api/v1/permission/all')
            .then((response) => {
              setUserData(response.data);
              setFilteredData(response.data); // Initialize filtered data with all user data
                setActiveUserCount(response.data.filter(data => data.roleStatus === 'active').length);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }, []);

    // Function to handle search
    const handleSearch = (searchValue) => {
        const filtered = userData.filter(data => 
            data.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.email.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
    };

    // Function to fetch updated data after adding a new record
    const handleRecordAdded = () => {
        axios.get('http://localhost:3000/api/v1/permission/all')
            .then(response => {
                setUserData(response.data);
                setFilteredData(response.data); // Update filtered data after adding a new record
            })
            .catch(error => {
                console.error('Error fetching updated data:', error);
            });
    }; 

    const dataCard = () => {
        return filteredData.map((data, index) => {
            return (
                <DataCard
                    key={index}
                    id={data._id}
                    username={data.username}
                    email={data.email}
                    validTime={data.validTime}
                    role={data.role}
                    onRecordAdded={handleRecordAdded}
                />
            )
        })
    }

    return (
        <div className='outer'>
            <div className="top-section">
                <div className="card">
                    <StatusCard title="Active User Roles" count={activeUserCount} />
                    <StatusCard title="All User Roles" count={activeUserCount} />
                </div>
                <div className="btn">
                    <NavigationBtn key='1' btnName="Attempts" />
                    <AddRoleBtn key='2' btnName="Add a Role" onRecordAdded={handleRecordAdded} />
                </div>
            </div>
            <div className="search-bar">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="table">
                <div className="inner">
                    <div className="header">
                        <h3>Username</h3>
                        <h3>Email</h3>
                        <h3>Valid Time</h3>
                        <h3>User Role</h3>
                    </div>
                    <hr />
                    {loading ? (
                        <div className="spinner"></div>
                    ) : (
                        <div className="cards">
                            {dataCard()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WithLayout(PermissionManagementPage)
