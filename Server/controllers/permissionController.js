const UserRole = require("../models/permissionModels/userRole.model");
const uuid = require('uuid');

const testController = (req, res) => {
  res.send('Permission controller is working!');
}

const createUserRole = async (req, res) => {
  try {
    const { email, username, password, role, validTime } = req.body;

    const newRole = new UserRole({
      roleID: uuid.v4(),
      role,
      email,
      username,
      password,
      validTime,
      roleStatus: 'active'
    });

    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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
  const userId = req.params.id;
  const { roleID, email, username, password, role, validTime } = req.body;
  const updatedRole = { roleID, email, username, password, role, validTime };
  try {
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

module.exports = { testController, createUserRole, getAllUserRoles, getUserRoleByID, updateUserRole, deleteUserRole };
