const Jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (data) => {
const token = Jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '10h' });
return token;
};

module.exports = createToken;