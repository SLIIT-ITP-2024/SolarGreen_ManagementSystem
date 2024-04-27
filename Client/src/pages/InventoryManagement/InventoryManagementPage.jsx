import React from 'react'
import { useState } from 'react'
import WithLayout from '../../hoc'
import Inventory from '../../components/InventoryManagement/Inventory/Inventory'
import Search from '../../components/InventoryManagement/Search/Search'
import InventoryDiscountCalculator from '../../components/InventoryManagement/DiscountCalculation/InventoryDiscountCalculator'

const InventoryManagementPage = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <div >
        <Search/>
        <Inventory/>
        <InventoryDiscountCalculator/>

    </div>
    </>
  )
}

export default WithLayout(InventoryManagementPage)