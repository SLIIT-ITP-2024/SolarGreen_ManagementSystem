
import React, { useEffect, useState } from 'react';
import { Link, useLocation  } from "react-router-dom"; 

import "./Menu.scss";
import {
  permission_icon,
  inventory_icon,
  payment_icon,
  dashboard_icon,
  customer_icon,
  installation_icon,
  maintanance_icon,
  transport_icon,
  leave_icon,
} from "../../assets/index";

const items = [
  {
    name: "Dashboard",
    icon: dashboard_icon,
    link: "/",
  },
  {
    name: "Installation",
    icon: installation_icon,
    link: "/installation-management",
  },
  {
    name: "Customer",
    icon: customer_icon,
    link: "/user-management",
  },
  {
    name: "Transport",
    icon: transport_icon,
    link: "/transport-management",
  },
  {
    name: "Maintenance",
    icon: maintanance_icon,
    link: "/maintenance-management",
  },
  {
    name: "Payment",
    icon: payment_icon,
    link: "/payment-management",
  },
  {
    name: "Inventory",
    icon: inventory_icon,
    link: "/inventory-management",
  },
  {
    name: "Leave and payroll",
    icon: leave_icon,
    link: "/leave-and-payroll-management",
  },
  {
    name: "Permission",
    icon: permission_icon,
    link: "/permission-management",
  },
];
import { RiLogoutCircleLine } from "react-icons/ri";
import { useDarkMode } from "../../contexts/DarkModeContext";
const Menu = () => {
  const { isDarkMode } = useDarkMode();
  const location = useLocation();
  //--------------
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  useEffect(() => {
    // Retrieve username and role from local storage
    const storedUsername = localStorage.getItem('username');
    const storedRole = localStorage.getItem('role');
    setUsername(storedUsername);
    setRole(storedRole);
  }, []);
  const loggedOuthandle = ()=>{
    localStorage.clear();
    window.location.href = '/login';
  }
  return (
    <div className={`menu-outer`} data-theme={isDarkMode ? "dark" : "light"}>
      <div className="menu-inner">
        <div className="content">
          <div className="profile-section">
            <div className="profile-img"></div>
            <div className="name">
              <h3>{role}</h3>
            </div>
            <div className="position">
              <h3>{username}</h3>
            </div>
          </div>
          <div className="nav-links">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`nav-link ${
                  location.pathname === item.link ? "active" : ""
                }`}
              >
                <div className="icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="name">
                  <h3>{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="logout">

          <RiLogoutCircleLine className="logout-icon" />
            <button onClick={loggedOuthandle}>logout</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
