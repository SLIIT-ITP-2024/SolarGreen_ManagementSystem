const Employee = require("../models/Employee");

const testController = (req, res) => {
  res.send("employee and customer controller is working!");
};

const addEmployeeControl = async (req, res) => {
  try {
    const { email, name, gender, role, startingDate, personalDetail, phone } =
      req.body;

    console.log("req.body: ", req.body);

    if (!email) return res.status(400).json({ errorMsg: "Email is required" });
    if (!name) return res.status(400).json({ errorMsg: "Name is required" });
    if (!gender) return res.status(400).json({ errorMsg: "Gender is required" });
    if (!role) return res.status(400).json({ errorMsg: "Role is required" });
    if (!startingDate) return res.status(400).json({ errorMsg: "Starting date is required" });
    if (!personalDetail) return res.status(400).json({ errorMsg: "Personal date is required" });

    // Check if the email is already registered
    const existingUser = await Employee.findOne({ email });

    if (existingUser) {
      // Email already registered
      return res.status(400).json({ errorMsg: "Email already exists" });
    }

    // Email not registered, proceed with user creation
    const newEmployee = new Employee({
      email,
      name,
      gender,
      role,
      phone,
      startingDate: new Date(startingDate),
      personalDetail,
    });

    await newEmployee.save();

    return res.status(200).json({
      successMsg: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ errorMsg: "Error creating employee" });
  }
};

const getAllEmployeeControl = async (req, res) => {
  try {
    Employee.find().then((employees) => {
      return res.status(200).json({
        employees: employees,
        successMsg: "Fetch all employee successfully",
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ errorMsg: "Error fetching employee" });
  }
};

const editEmployeeControl = async (req, res) => {
  console.log("req.body: ", req.body._id);
  if (!req.body._id) return res.status(500).json({ errorMsg: msg.noDataError });

  Employee.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { ...req.body, startingDate: new Date(req.body.startingDate) } },
    { new: true }
  )
    .then((updatedEmployee) => {
      console.log(updatedEmployee);
      if (!updatedEmployee) {
        return res.status(500).json({ errorMsg: "Error edit employee" });
      }
      return res.status(200).json({
        successMsg: "Edit employee successfully",
        employee: updatedEmployee,
      });
    })
    .catch((error) => {
      console.error("Update error:", error);
      return res.status(500).json({ errorMsg: "Error edit employee" });
    });
};

const deleteEmployeeControl = async (req, res) => {
  console.log("req.body delete: ", req.body._id);
  if (!req.body._id) return res.status(500).json({ errorMsg: msg.noDataError });

  Employee.findOneAndDelete({ _id: req.body._id })
    .then((deletedEmployee) => {
      console.log(deletedEmployee);
      if (!deletedEmployee) {
        return res.status(500).json({ errorMsg: "Error delete employee" });
      }
      return res.status(200).json({
        successMsg: "delete employee successfully",
        employee: deletedEmployee,
      });
    })
    .catch((error) => {
      console.error("Update error:", error);
      return res.status(500).json({ errorMsg: "Error delete employee" });
    });
};

module.exports = {
  addEmployeeControl,
  testController,
  getAllEmployeeControl,
  editEmployeeControl,
  deleteEmployeeControl,
};