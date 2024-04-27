const Employee = require("../models/Employee");

const testController = (req, res) => {
  res.send("employee and customer controller is working!");
};

const addEmployeeControl = async (req, res) => {
  try {
    const { email, name, gender, role, startingDate, personalDetail } = req.body;

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
    return res.status(500).json({ errorMsg: "Error creating user" });
  }
};

module.exports = { addEmployeeControl, testController };