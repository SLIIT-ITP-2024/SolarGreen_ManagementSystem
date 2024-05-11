import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  LoginPage,
  RegisterPage,
  InstallationManagementPage,
  LeaveAndPayrollManagementPage,
  MaintenanceManagementPage,
  PaymentManagementPage,
  PermissionManagementPage,
  UserManagementPage,
  TransportManagementPage,
  Dashboard,
  InventoryManagementPage,
  NotFoundPage,
  LoginAttemptsPage,
} from ".././pages";

// Installation Management
import Estimations from "../pages/InstallationManagement/Estimations";
import AddProject from "../pages/InstallationManagement/AddProject/AddProject";
import UpdateProject from "../pages/InstallationManagement/UpdateProject/UpdateProject";
import Report from "../pages/InstallationManagement/Report/Report";
//Maintenance Managemenet
import RequestForm from '../pages/MaintenanceManagement/RequestForm/RequestForm'
import Update from '../pages/MaintenanceManagement/Update/Update';
import GenerateReports from '../pages/MaintenanceManagement/Generate/GenerateReports';



const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/installation-management"
          element={<InstallationManagementPage />}
        />
        <Route
          path="/leave-and-payroll-management"
          element={<LeaveAndPayrollManagementPage />}
        />
        <Route
          path="/maintenance-management"
          element={<MaintenanceManagementPage />}
        />
        <Route path="/payment-management" element={<PaymentManagementPage />} />
        <Route
          path="/permission-management"
          element={<PermissionManagementPage />}
        />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route
          path="/transport-management"
          element={<TransportManagementPage />}
        />
        <Route
          path="/inventory-management"
          element={<InventoryManagementPage />}
        />
        <Route path="/login-attempts" element={<LoginAttemptsPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* InstallationManagementRoutes */}
        <Route
          path="/installation-management/estimations"
          element={<Estimations />}
        />
        <Route
          path="/installation-management/new-project"
          element={<AddProject />}
        />
        <Route
          path="/installation-management/update-project/:id"
          element={<UpdateProject />}
        />
        <Route
          path="/installation-management/generate-report"
          element={<Report />}
        />

         {/*Maintenance Management*/}
         <Route
          path="/maintanance-management/create"
          element={<RequestForm/>}
        />
      
      <Route
          path="/maintanance-management/update/:id"
          element={<Update/>}
        />
    
    <Route
          path="/maintanance-management/generate"
          element={<GenerateReports/>}
        />

    
       
     
      </Routes>
    </Router>
  );
};

export default AppRouters;
