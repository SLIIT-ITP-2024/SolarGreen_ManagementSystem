import React from 'react'
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard'
import SearchBar from '../../components/_Shared/SearchBar/SearchBar'
import WithLayout from '../../hoc'


import './LoginAttemptsPage.scss';
import ReportGenbtn from '../../components/PermissionManagement/LoginAttempts/Button/ReportGenbtn'
import AttemptsDataCard from '../../components/PermissionManagement/LoginAttempts/AttemptsDataCard'

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
                <AttemptsDataCard
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
       <div className='loging-attempts-outer'>
        <div className="loging-attempts-top-section">
          <div className="loging-attempts-card">
          <StatusCard title="Real Users" count = "07" />
          <StatusCard title="Unauthorized" count = "12" />
          </div>
          <div className="loging-attempts-btn">
                <ReportGenbtn btnName="Generate Report" />
          </div>
         
        </div>
        <div className="loging-attempts-search-bar">
            <SearchBar />
        </div>
        
        <div className="loging-attempts-table">
            <div className="loging-attempts-inner">
                <div className="header">
                  <h3>Username</h3>
                  <h3>Password</h3>
                  <h3>IP Address</h3>
                  <h3>Time</h3>
                </div>
                <hr />

                <div className="loging-attempts-cards">
                  {dataCard()}
                </div>
            </div>
        </div>
    </div> 
   </>
  )
}

export default WithLayout(LoginAttemptsPage)
