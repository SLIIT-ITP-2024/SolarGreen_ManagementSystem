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
  NotFoundPage,
  AddEmployee
} from '.././pages';

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
        {/* <Route path="/employee-page" element={<EmployeePage />} /> */}
        <Route path="/add-user" element={<AddEmployee />} />
        {/* <Route path="/update/:id" element={<UpdateEmployee />} /> */}
        <Route path="/transport-management" element={<TransportManagementPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
