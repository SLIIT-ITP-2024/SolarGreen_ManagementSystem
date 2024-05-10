import React from 'react'
import { useState } from 'react'
import WithLayout from '../../hoc'

import Schedule from '../../components/MaintenanceManagement/Schedule/Schedule'
const MaintenanceManagementPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    
      <Schedule/>
     </div>
  </>
  )
}

export default WithLayout(MaintenanceManagementPage)
