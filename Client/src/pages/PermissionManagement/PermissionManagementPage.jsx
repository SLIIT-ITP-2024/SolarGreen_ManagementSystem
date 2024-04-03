import React from 'react'
import WithLayout from '../../hoc'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'

import './PermissionManagementPage.scss'
import NavigationBtn from '../../components/PermissionManagement/NavigationBtn/NavigationBtn'
import SearchBar from '../../components/_Shared/SearchBar/SearchBar'
import DataCard from '../../components/PermissionManagement/DataCard/DataCard'
import Popup from '../../components/PermissionManagement/updatePopup/Popup'
import AddRoleBtn from '../../components/PermissionManagement/addRoleBtn/AddRoleBtn'
const PermissionManagementPage = () => {

const dataList = {
    data: [
        {
            username: 'userx',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Admin'
        },
        {
            username: 'usery',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Manager'
        },
        {
            username: 'userz',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Admin'
        },
        {
            username: 'userx',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Admin'
        },
        {
            username: 'usery',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Manager'
        },
        {
            username: 'userz',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Admin'
        },
        {
            username: 'userx',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Admin'
        },
        {
            username: 'usery',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Manager'
        },
        {
            username: 'userz',
            password: '*****',
            expir_date: '12/12/2024',
            user_role: 'Admin'
        }

    ],

}
  const dataCard = () => {
    return dataList.data.map((data, index) => {
        return (
            <DataCard
                key={index}
                username={data.username}
                password={data.password}
                expir_date={data.expir_date}
                user_role={data.user_role}
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
          <AddRoleBtn key = '2' btnName= "Add a Role" />
          </div>
         
        </div>
        <div className="search-bar">
            <SearchBar />
        </div>
        
        <div className="table">
            <div className="inner">
                <div className="header">
                  <h3>Username</h3>
                  <h3>Password</h3>
                  <h3>Expiring data</h3>
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
