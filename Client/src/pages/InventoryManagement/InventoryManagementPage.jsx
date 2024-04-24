import React from 'react'
import { useState } from 'react'
import WithLayout from '../../hoc'
import Inventory from '../../components/InventoryManagement/Inventory/Inventory'


const InventoryManagementPage = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <div >
        
        <Inventory/>

    </div>
    </>
  )
}

export default WithLayout(InventoryManagementPage)