const Jwt = require('jsonwebtoken');
const { getEmail } = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (data) => {
const token = Jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '10d' });
return token;
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.staus(401).json({ message: 'Token not found' });
  }
   try {
    const decoded = Jwt.verify(token, secret);
    const user = await getEmail(decoded.data.email);
    req.user = user;
    next();
   } catch (error) {
    return res.staus(401).json({ message: 'Expired or invalid token' });
   }
};

module.exports = { createToken, validateToken };