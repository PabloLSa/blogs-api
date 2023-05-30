const { BlogPost, User, Category } = require('../models');

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, 
            as: 'categories',
    attributes: ['id', 'name'],
      through: { attributes: [] } },
    ],
  });

  return post
    ? res.status(200).json(post)
    : res.status(404).json({ message: 'Post does not exist' });
};

module.exports = { getPostById };
