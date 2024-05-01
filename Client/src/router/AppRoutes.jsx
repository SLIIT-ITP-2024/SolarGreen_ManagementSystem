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
  InventoryAddForm,
  InventoryUpdateForm,
  GenerateReport,
  PaymentUpdatePage,

} from ".././pages";

// Installation Management
import Estimations from "../pages/InstallationManagement/Estimations";
import AddProject from "../pages/InstallationManagement/AddProject/AddProject";
import UpdateProject from "../pages/InstallationManagement/UpdateProject/UpdateProject";

import PaymentDetailsPage from "../pages/PaymentManagement/PaymentDetailsPage";
import Report from "../pages/InstallationManagement/Report/Report";

// Maintenance Management
import RequestForm from "../pages/MaintenanceManagement/RequestForm/RequestForm";
import Update from "../pages/MaintenanceManagement/Update/Update";
import GenerateReports from "../pages/MaintenanceManagement/Generate/GenerateReports";




const AppRouters = () => {
  const isLogged = localStorage.getItem("token") ? true : false;

  return (
    <Router>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/" element={<Dashboard />} />
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
            <Route
              path="/payment-management"
              element={<PaymentManagementPage />}
            />
            <Route
              path="/permission-management"
              element={<PermissionManagementPage />}
            />
            <Route
              path="/user-management"
              element={<UserManagementPage />}
            />
            <Route
              path="/transport-management"
              element={<TransportManagementPage />}
            />
            <Route
              path="/inventory-management"
              element={<InventoryManagementPage />}
            />
            <Route
              path="/login-attempts"
              element={<LoginAttemptsPage />}
            />
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
            {/* Maintenance Management */}
            <Route
              path="/maintanance-management/create"
              element={<RequestForm />}
            />
            <Route
              path="/maintanance-management/update/:id"
              element={<Update />}
            />
            <Route
              path="/maintanance-management/generate"
              element={<GenerateReports />}
            />
                
                <Route
          path="/payment-management/update-project"
          element={<PaymentUpdatePage />}
        />

            {/*Inventory Management*/}
      <Route
          path="/inventory-management/add"
          element={<InventoryAddForm />}
        />

      <Route
          path="/inventory-management/update-inventory/:id"
          element={<InventoryUpdateForm />}
        />

      <Route
          path="/inventory-management/generate-report"
          element={<GenerateReport />}
        />
        <Route path="/add-payment" element={<PaymentManagementPage />} />
        <Route path="/payment-details" element={<PaymentDetailsPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            {/* Add other routes accessible without authentication */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouters;
