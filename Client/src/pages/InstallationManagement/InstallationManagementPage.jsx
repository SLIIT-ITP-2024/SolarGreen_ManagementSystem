import React from 'react'
import WithLayout from '../../hoc'
import TestCom from '../../components/InstallationManagement/__tests__/TestCom'
import Buttons from '../../components/InstallationManagement/Buttons/Buttons'

const InstallationManagementPage = () => {
  return (
    <div>
        <h1>Installation Management</h1>
        <Buttons/>
    </div>
  )
}

export default WithLayout(InstallationManagementPage)

