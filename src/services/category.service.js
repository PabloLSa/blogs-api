const { Category } = require('../models');

const creatingCategory = async (name) => {
  const createUser = await Category.create({ name });
  return createUser;
};

const getAllCategory = async () => {
  const categories = Category.findAll();
  return categories;
};

module.exports = { creatingCategory, getAllCategory };