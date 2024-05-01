require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    if(req.header('Authorization') === undefined) {
        return res.status(401).json({ message: 'Authorization denied' });
    }
    
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('decoded:', decoded);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {auth};  