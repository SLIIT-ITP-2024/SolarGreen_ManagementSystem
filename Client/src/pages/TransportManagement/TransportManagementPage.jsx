import React from 'react'
import WithLayout from '../../hoc'
import TransportManagement from '../../components/TransportManagement/TransportManagement'
import SearchBar from '../../components/TransportManagement/SearchBar'

const TransportManagementPage = () => {
  return (
    <div>
       <TransportManagement />
       <SearchBar/>
    </div>
  )
}

export default WithLayout(TransportManagementPage)
