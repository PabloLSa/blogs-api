const { 
  getEmail, 
  getAllService, 
  getOneService, 
  creatingUser } = require('../services/user.service');
const { createToken } = require('../auth/generateToken');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await getEmail(email);
  console.log(user, email);
  if (user !== null) return res.status(409).json({ message: 'User already registered' });
  await creatingUser(displayName, email, password, image);
  const token = createToken(email);
  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await getAllService();
  const userData = users.map((user) => {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  });
  return res.status(200).json(userData);
};

const getOne = async (req, res) => {
const { id } = req.params;
const userId = Number(id);
const user = await getOneService(id);
if (!user) return res.status(404).json({ message: 'User does not exist' });
const { displayName, email, image } = user;
const userData = { id: userId, displayName, email, image };
return res.status(200).json(userData);
};

module.exports = {
  createUser,
  getAll,
  getOne,
};