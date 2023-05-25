const { creatingCategory } = require('../services/category.service');

const categories = async (req, res) => {
  const { name } = req.body;
  if (!name) {
 return res.status(400).json({
     message: '"name" is required',
  }); 
}
const newCategory = await creatingCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = { categories };