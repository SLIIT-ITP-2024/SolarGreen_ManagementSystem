const UserRole = require('../models/permissionModels/userRole.model');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserRole.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid login credentials' });
      }
      const isValidPassword = await user.isValidPassword(password);
      if (isValidPassword) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(201).json({ message: 'Invalid Password' });
      }
     
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  module.exports = { login };
