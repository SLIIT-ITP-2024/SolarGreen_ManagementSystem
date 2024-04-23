const UserRole = require('../models/permissionModels/userRole.model');

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        const user = await UserRole.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid login credentials' });
        }

        const isValidPassword = await user.isValidPassword(password);

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = await user.generateAuthToken();

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { login };
