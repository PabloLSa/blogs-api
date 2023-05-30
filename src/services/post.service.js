const { Category, BlogPost, PostCategory } = require('../models');

const verifyPostCategories = async (categoriesId) => {
  const response = await Category.findAll();
  const categories = response
  .map((element) => element.dataValues)
  .map((e) => e.id);
  return categoriesId.every((category) => categories.includes(category));
};
const post = async ({ title, content, userId, categoryIds }) => {
  const veifyCategory = await verifyPostCategories(categoryIds);
  if (!veifyCategory) return { type: 400, message: 'one or more "categoryIds" not found' };
  const formattedDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
const createPost = { title,
content,
userId,
published: formattedDate,
updated: formattedDate,
};

const response = await BlogPost.create(createPost);

const postId = response.dataValues.id;

await Promise.all(
  categoryIds.map((categoryId) => PostCategory
    .create({ categoryId, postId })),
);

return { type: null, message: response.dataValues };
};

module.exports = { post };