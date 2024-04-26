import React, { useEffect } from 'react'
import WithLayout from '../../hoc'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'
import AddRoleBtn from '../../components/PermissionManagement/addRoleBtn/AddRoleBtn'
import SearchBar from '../../components/_Shared/SearchBar/SearchBar'
import '../PermissionManagement/PermissionManagementPage.scss'
import axios from 'axios'
import TransportDataCard from '../../components/TransportManagement/TransportDataCard/TransportDataCard'
import AddNewBtn from '../../components/TransportManagement/btns/AddNewBtn'

const TransportManagementPage = () => {
  const loading = false;
  const [dataList, setDataList] = React.useState([]);

  const handleRecordAdded = () => {
    console.log('Record added');
  }
  const handleSearch = (searchValue) => {
    console.log('Search value:', searchValue);
  }

useEffect(() => {
    axios.get('http://localhost:3000/api/v1/transport/all')
    .then((response) => {
        setDataList(response.data);
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}  , []);
const dataCard = () => {
    return dataList.map((data, index) => {
        return (
            <TransportDataCard
                key={index}
                id={data._id}
                transportID={data.transportID}
                transportType={data.transportType}
                transportName={data.transportName}
                transportStatus={data.transportStatus}
                onRecordAdded={handleRecordAdded}
            />
        )
    })
}
  return (
   <>
       <div className='outer'>
            <div className="top-section">
                <div className="card">
                    <StatusCard title="To Complete" count="05" />
                    <StatusCard title="In Progress" count="02" />
                </div>
                <div className="btn">
                    <AddNewBtn key='2' btnName="Add New" onRecordAdded={handleRecordAdded} />
                </div>
            </div>
            <div className="search-bar">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="table">
                <div className="inner">
                    <div className="header">
                        <h3>TransportID</h3>
                        <h3>transport Type</h3>
                        <h3>transport Name</h3>
                        <h3>Status</h3>
                    </div>
                    <hr />
                    {loading ? (
                        <div className="spinner"></div>
                    ) : (
                        <div className="cards">
                           {dataCard()}
                        </div>
                    )}
                </div>
            </div>
        </div>
   
   </>
  )
}

export default WithLayout(TransportManagementPage)
