const { Category } = require('../models');

const creatingCategory = async (name) => {
  const createUser = await Category.create({ name });
  return createUser;
};
module.exports = { creatingCategory };