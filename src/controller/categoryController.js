const { creatingCategory, getAllCategory } = require('../services/category.service');

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

const getAllCat = async (_req, res) => {
  const categorie = await getAllCategory();
  const categoryData = categorie.map((category) => {
    const { id, name } = category;
    return { id, name };
  });
  return res.status(200).json(categoryData);
};

module.exports = { categories, getAllCat };