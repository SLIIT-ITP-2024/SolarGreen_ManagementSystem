import React from 'react'
import WithLayout from '../../hoc/WithLayout'
import Buttons from '../../components/InstallationManagement/Buttons/Buttons'
import AllProjects from '../../components/InstallationManagement/Table/AllProjects'

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

