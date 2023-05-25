const Jwt = require('jsonwebtoken');
const { getEmail } = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const createToken = (data) => {
const token = Jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '10d' });
// console.log('xablau', data);
return token;
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
   try {
    const decoded = Jwt.verify(token, secret);
    // console.log('xablau', decoded);
    const user = await getEmail(decoded.data);
    console.log(user);
    req.user = user;
   return next();
   } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
   }
};

module.exports = { createToken, validateToken };