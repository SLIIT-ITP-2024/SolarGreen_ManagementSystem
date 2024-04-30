import React, { useEffect, useState } from 'react';
import StatusCard from '../../components/PermissionManagement/TopStatusCard/StatusCard';
import SearchBar from '../../components/_Shared/SearchBar/SearchBar';
import WithLayout from '../../hoc';
import './LoginAttemptsPage.scss';
import ReportGenbtn from '../../components/PermissionManagement/LoginAttempts/Button/ReportGenbtn';
import AttemptsDataCard from '../../components/PermissionManagement/LoginAttempts/AttemptsDataCard';
import axios from 'axios';

const LoginAttemptsPage = () => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const[dataCount, setDataCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/login-attempts/all')
            .then((response) => {
                console.log(response.data);
                setDataList(response.data);
                setDataCount(response.data.length);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const dataCard = () => {
        return dataList.map((data, index) => (
            <AttemptsDataCard
                key={index}
                email={data.email}
                password={data.password}
                ip={data.ipAddress}
                dataAndTime={data.time}
            />
        ));
    }

    return (
        <>
            <div className='loging-attempts-outer'>
                <div className="loging-attempts-top-section">
                    <div className="loging-attempts-card">
                        <StatusCard title="Real Users" count={6} />
                        <StatusCard title="Unauthorized" count={dataCount} />
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

                        {/* Conditionally render loading animation */}
                        {loading ? (
                            <div className="spinner"></div>
                        ) : (
                            <div className="loging-attempts-cards">
                                {dataCard()}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WithLayout(LoginAttemptsPage);
