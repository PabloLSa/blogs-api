const { User } = require('../models');

const user = async (email, password) => {
 const userFind = await User.findOne({
    where: { email, password },
  });

  if (!userFind) return null;

  const response = {
    email: userFind.dataValues.email,
    id: userFind.dataValues.id,
  };

  return response;
};

const getEmail = async (email) => {
  const newUser = await User.findOne({ where: { email } });
  // console.log(newUser);
  return newUser;
};

const creatingUser = async (displayName, email, password, image) => {
  const createUser = await User.create({ 
    displayName, email, password, image });
  return createUser;
};

const getAllService = async () => {
  const users = User.findAll();
  return users;
};
const getOneService = async (id) => {
const uSer = await User.findOne({ where: { id } });
return uSer;
};

const destroyUser = async (id) => {
  const userDelete = await User.findByPk(id);
  if (userDelete.dataValues.id !== id) {
   return { type: 401, message: 'Unauthorized user' };
  }
   await userDelete.destroy();
   return { type: null };
};

module.exports = { 
  user, 
  creatingUser, 
  getAllService, 
  getEmail, 
  getOneService,
  destroyUser,
 };