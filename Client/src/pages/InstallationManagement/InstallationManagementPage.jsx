import React from 'react'
import WithLayout from '../../hoc'
import TestCom from '../../components/InstallationManagement/__tests__/TestCom'
import Buttons from '../../components/InstallationManagement/Buttons/Buttons'
import AllProjects from '../../components/InstallationManagement/Table/AllProjects'
import AddProject from '../../components/InstallationManagement/AddProjectPopup/AddProject'

const InstallationManagementPage = () => {
  return (
    <div>
        <h1>Installation Management</h1>
        <Buttons/>
        <AllProjects/>

    </div>
  )
}

export default WithLayout(InstallationManagementPage)

