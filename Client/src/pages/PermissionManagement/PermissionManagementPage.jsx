import React, { useEffect, useState } from 'react'
import WithLayout from '../../hoc'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'

import './PermissionManagementPage.scss'
import NavigationBtn from '../../components/PermissionManagement/NavigationBtn/NavigationBtn'
import SearchBar from '../../components/_Shared/SearchBar/SearchBar'
import DataCard from '../../components/PermissionManagement/DataCard/DataCard'
import Popup from '../../components/PermissionManagement/updatePopup/Popup'
import AddRoleBtn from '../../components/PermissionManagement/addRoleBtn/AddRoleBtn'
import axios from 'axios'

const PermissionManagementPage = () => {
    const [userData, setUserData] = useState([]);
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
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, []);
    
      // Function to fetch updated data after adding a new record
  const handleRecordAdded = () => {
    axios.get('http://localhost:3000/api/v1/permission/all')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching updated data:', error);
      });
  }; 

  const dataCard = () => {
    return userData.map((data, index) => {
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
          <StatusCard title="Active User Roles" count = "07" />
          <StatusCard title="All User Roles" count = "12" />
          </div>
          <div className="btn">
          <NavigationBtn key = '1' btnName= "Attempts" />
          <AddRoleBtn key = '2' btnName= "Add a Role"  onRecordAdded={handleRecordAdded}/>
          </div>
         
        </div>
        <div className="search-bar">
            <SearchBar />
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

                <div className="cards">
                  {dataCard()}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WithLayout(PermissionManagementPage)
