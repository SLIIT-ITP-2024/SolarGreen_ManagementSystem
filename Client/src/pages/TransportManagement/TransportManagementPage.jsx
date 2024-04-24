import React from 'react'
import MySearchBar from '../../components/TransportManagement/MySearchBar'
import WithLayout from '../../hoc'
const TransportManagementPage = () => {
  return (
    <div>
       <MySearchBar />
    </div>
  )
}

export default WithLayout(TransportManagementPage)
