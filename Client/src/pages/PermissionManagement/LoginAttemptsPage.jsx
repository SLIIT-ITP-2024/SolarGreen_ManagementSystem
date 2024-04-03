import React from 'react'
import DataCard from '../../components/PermissionManagement/LoginAttempts/DataCard'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'
import SearchBar from '../../components/_Shared/SearchBar/SearchBar'
import WithLayout from '../../hoc'


import './LoginAttemptsPage.scss';
import ReportGenbtn from '../../components/PermissionManagement/LoginAttempts/Button/ReportGenbtn'

const LoginAttemptsPage = () => {
    const dataList = {
        data: [
            {
                username: 'userx',
                password: '*****',
                ip: '192.164.10.2',
                time: '06/03/24 : 12:30AM'
            },
            {
                username: 'usery',
                password: '*****',
                ip: '192.164.10.2',
                time: '06/03/24 : 12:30AM'
            },
            {
                username: 'userz',
                password: '*****',
                ip: '192.164.10.2',
                time: '06/03/24 : 12:30AM'
            }
           
    
        ],
    
    }


    const dataCard = () => {
        return dataList.data.map((data, index) => {
            return (
                <DataCard
                    key={index}
                    username={data.username}
                    password={data.password}
                    ip={data.ip}
                    dateAndTime={data.time}
                />
            )
        })
    }
  return (
   <>
       <div className='outer'>
        <div className="top-section">
          <div className="card">
          <StatusCard title="Real Users" count = "07" />
          <StatusCard title="Unauthorized" count = "12" />
          </div>
          <div className="btn">
                <ReportGenbtn btnName="Generate Report" />
          </div>
         
        </div>
        <div className="search-bar">
            <SearchBar />
        </div>
        
        <div className="table">
            <div className="inner">
                <div className="header">
                  <h3>Username</h3>
                  <h3>Password</h3>
                  <h3>IP Address</h3>
                  <h3>Time</h3>
                </div>
                <hr />

                <div className="cards">
                  {dataCard()}
                </div>
            </div>
        </div>
    </div> 
   </>
  )
}

export default WithLayout(LoginAttemptsPage)
