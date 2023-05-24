const { user } = require('../services/user.service');
const createToken = require('../auth/generateToken');

const login = async (req, res) => {
  const { email, password } = req.body;
  const userFind = await user(email, password) === null;
  if (userFind) {
   return res.status(400).json({
    message: 'Invalid fields',
  });
  }
  const token = createToken(userFind);
  res.status(200).json({ token });
  };
  
  module.exports = login;