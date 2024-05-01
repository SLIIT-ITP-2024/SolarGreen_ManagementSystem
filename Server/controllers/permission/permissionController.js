const UserRole = require("../../models/permissionModels/userRole.model");
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const validator = require('./valitation/permissionControllerValidator');

const testController = (req, res) => {
  res.send('Permission controller is working!');
}

const createUserRole = async (req, res) => {
  try {
    // Validate request data (assuming validator is already defined)
    await validator.createUserRole(req, res);

    // Request data is valid, proceed with creating user role
    const { email, username, password, role, validTime } = req.body;

    const newRole = new UserRole({
      roleID: uuid.v4(), // Generate a unique ID
      role,
      email,
      username,
      // Consider using secure password hashing (e.g., bcrypt)
      password, // Placeholder for secure hashing
      validTime,
      roleStatus: 'active'
    });

    await newRole.save(); // Assuming `save` is a method to persist the user role

    res.status(201).json({ message: 'User role created successfully', data: newRole }); // Informative response
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error creating user role' }); // Generic error message for security
  }
};

const getAllUserRoles = async (req, res) => {
  try {
    const roles = await UserRole.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getUserRoleByID = async (req, res) => {
  try {
    const role = await UserRole.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateUserRole = async (req, res) => {
  try {
    // Validate request data
    await validator.updateUserRole(req, res);

    // Request data is valid, proceed with updating user role
    const userId = req.params.id;
    const { email, username, role, validTime } = req.body;
    const updatedRole = { email, username, role, validTime };

    const updatedRoleDocument = await UserRole.findByIdAndUpdate(userId, updatedRole, { new: true });
    if (!updatedRoleDocument) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(updatedRoleDocument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteUserRole = async (req, res) => {
  try {
    const deletedRole = await UserRole.findByIdAndDelete(req.params.id);
    if (!deletedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const searchByUsername = async (req, res) => {
  try {
    // Validate request data
    await validator.searchByUsername(req, res);

    // Request data is valid, proceed with searching by username
    const username = req.params.username;
    const regex = new RegExp(username, 'i');
    const users = await UserRole.find({ username: { $regex: regex } });

    if (!users.length) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { testController, createUserRole, getAllUserRoles, getUserRoleByID, 
  updateUserRole, deleteUserRole, searchByUsername };
