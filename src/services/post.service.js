const { Category, BlogPost, PostCategory, User } = require('../models');

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

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });

  return posts;
};

const destroyPost = async (id, userId) => {
  const postByid = await BlogPost.findByPk(id);
  if (!postByid) return { type: 404, message: 'Post does not exist' };
  if (postByid.dataValues.userId !== userId) {
   return { type: 401, message: 'Unauthorized user' };
  }
   await postByid.destroy();
   return { type: null };
};

module.exports = { post, getAllPost, destroyPost };