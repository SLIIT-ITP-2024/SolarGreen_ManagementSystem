import React from 'react'
import WithLayout from '../../hoc'
import TestCom from '../../components/InstallationManagement/__tests__/TestCom'

const InstallationManagementPage = () => {
  return (
    <div>
        <h1>Installation Management</h1>
        <TestCom/>
    </div>
  )
}

export default WithLayout(InstallationManagementPage)

