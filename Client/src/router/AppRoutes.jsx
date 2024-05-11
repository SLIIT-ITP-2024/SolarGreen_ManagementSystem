import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  NotFoundPage,
  UserManagementPage,
  AddEmployee,
  UpdateEmployee,
  ViewEmployeeList,
  AddCustomer,
  CustomerPage,
  EditCustomer,
  CustomerList,
  EmployeePage,
  Employee,
  EditEmployee,
  LeaveAndPayrollManagementPage,
  MaintenanceManagementPage,
  RequestForm,
  UpdateForm,
  GenerateReports,
  InventoryManagementPage,
  InventoryAddForm,
  InventoryUpdateForm,
  Report,
  PaymentManagementPage,
  PaymentDetailsPage,
  PaymentUpdatePage,
  PermissionManagementPage,
  LoginAttemptsPage,
  TransportManagementPage,
  Dashboard,
  InstallationManagementPage,
  Estimations,
  AddProject,
  UpdateProject,
  SendingEmailPage,
} from ".././pages";
import SolarReport from ".././pages/InstallationManagement/Report/Report";

const AppRouters = () => {
  const isLogged = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {isLogged ? (
          <>
            {/* Authenticated Routes */}
            <Route path="/" element={<Dashboard />} />

            <Route path="/installation-management/*" element={<InstallationManagementRoutes />} />
            <Route path="/leave-and-payroll-management" element={<LeaveAndPayrollManagementPage />} />
            <Route path="/maintenance-management/*" element={<MaintenanceManagementPageRoutes />} />
            <Route path="/payment-management/*" element={<PaymentManagementPageRoutes />} />
            <Route path="/permission-management/*" element={<PermissionManagementPageRoutes />} />
            
            <Route path="/transport-management" element={<TransportManagementPage />} />
            <Route path="/inventory-management/*" element={<InventoryManagementPageRoutes />} />
            <Route path="/user-management/*" element={<UserManagementPageRoutes />} />

            <Route path="*" element={<NotFoundPage />} />
          </>
        ) : (
          <>
            {/* Unauthenticated Routes */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

const InstallationManagementRoutes = () => (
  <Routes>
    <Route path="/" element={<InstallationManagementPage />} />
    <Route path="estimations" element={<Estimations />} />
    <Route path="new-project" element={<AddProject />} />
    <Route path="update-project/:id" element={<UpdateProject />} />
    <Route path="generate-report" element={<SolarReport />} />
  </Routes>
);

const PermissionManagementPageRoutes = () => (
  <Routes>
    <Route path="/" element={<PermissionManagementPage />} />
    <Route path="sending-email" element={<SendingEmailPage />} />
    <Route path="login-attempts" element={<LoginAttemptsPage />} />
  </Routes>
);

const MaintenanceManagementPageRoutes = () => (
  <Routes>
    <Route path="/" element={<MaintenanceManagementPage />} />
    <Route path="request-form" element={<RequestForm />} />
    <Route path="update-form/:id" element={<UpdateForm />} />
    <Route path="generate-reports" element={<GenerateReports />} />
  </Routes>
);

const PaymentManagementPageRoutes = () => (
  <Routes>
    <Route path="/" element={<PaymentDetailsPage />} />
    <Route path="add-payment" element={<PaymentManagementPage />} />
    <Route path="payment-update/:_id" element={<PaymentUpdatePage />} />
  </Routes>
);

const InventoryManagementPageRoutes = () => (
  <Routes>
    <Route path="/" element={<InventoryManagementPage />} />
    <Route path="add-inventory" element={<InventoryAddForm />} />
    <Route path="update-inventory" element={<InventoryUpdateForm />} />
    <Route path="generate-report" element={<Report />} />
  </Routes>
);

const UserManagementPageRoutes = () => (
  <Routes>
    <Route path="/" element={<UserManagementPage />} />
    <Route path="add-employee" element={<AddEmployee />} />
    <Route path="update-employee" element={<UpdateEmployee />} />
    <Route path="view-employee" element={<ViewEmployeeList />} />
    <Route path="add-customer" element={<AddCustomer />} />
    <Route path="customer" element={<CustomerPage />} />
    <Route path="edit-customer" element={<EditCustomer />} />
    <Route path="view-customer" element={<CustomerList />} />
    <Route path="employee-page" element={<EmployeePage />} />
    <Route path="employee" element={<Employee />} />
    <Route path="edit-employee" element={<EditEmployee />} />
  </Routes>
);

export default AppRouters;
