import React from 'react';
import { Link } from "react-router-dom"; 

import "./Menu.scss";
import { permission_icon, inventory_icon, payment_icon, dashboard_icon, customer_icon,
   installation_icon, maintanance_icon, transport_icon } 
   from "../../assets/index";

const items = [
  {
    name: "Dashboard",
    icon: dashboard_icon,
    link: "/"
  },
  {
    name: "Installation",
    icon: installation_icon,
    link: "/installation-management"
  },
  {
    name: "Customer",
    icon: customer_icon,
    link: "/user-management"
  },
  {
    name: "Transport",
    icon: transport_icon,
    link: "/transport-management"
  },
  {
    name: "Maintenance",
    icon: maintanance_icon,
    link: "/maintenance-management"
  },
  {
    name: "Payment",
    icon: payment_icon,
    link: "/payment-management"
  },
  {
    name: "Inventory",
    icon: inventory_icon,
    link: "/inventory-management"
  },
  {
    name: "Permission",
    icon: permission_icon,
    link: "/permission-management"
  }
]

const Menu = () => {

  return (
    <div className={`menu-outer ${isDarkMode ? 'dark-mode' :''}`}>
      <div className="menu-inner">
        <div className="content">
          <div className="profile-section">
            <div className="profile-img"></div>
            <div className="name">
              <h3>Mashi</h3>
            </div>
            <div className="position">
              <h3>Permission Manager</h3>
            </div>
          </div>
          <div className="nav-links">
            {items.map((item, index) => (
              <Link key={index} to={item.link} className="nav-link">
                <div className="icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="name">
                  <h3>{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
