import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
  NotFoundPage
} from '.././pages';
import AddEmployer from '../pages/UserManagement/Employer/AddEmployee/AddEmployee';

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/installation-management" element={<InstallationManagementPage />} />
        <Route path="/leave-and-payroll-management" element={<LeaveAndPayrollManagementPage />} />
        <Route path="/maintenance-management" element={<MaintenanceManagementPage />} />
        <Route path="/payment-management" element={<PaymentManagementPage />} />
        <Route path="/permission-management" element={<PermissionManagementPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route path="/add-user" element={<AddEmployer />} />
        <Route path="/transport-management" element={<TransportManagementPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
