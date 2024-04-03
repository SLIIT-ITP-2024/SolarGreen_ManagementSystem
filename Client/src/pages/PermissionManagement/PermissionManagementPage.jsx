import React from 'react'
import WithLayout from '../../hoc'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'

import './PermissionManagementPage.scss'
import NavigationBtn from '../../components/PermissionManagement/NavigationBtn/NavigationBtn'
const PermissionManagementPage = () => {
  return (
    <div className='outer'>
        <div className="top-section">
          <div className="card">
          <StatusCard title="Active User Roles" count = "07" />
          <StatusCard title="All User Roles" count = "12" />
          </div>
          <div className="btn">
          <NavigationBtn />
          <NavigationBtn />
          </div>
        </div>
    </div>
  )
}

export default WithLayout(PermissionManagementPage)
