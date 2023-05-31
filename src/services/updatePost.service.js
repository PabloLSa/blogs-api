const { BlogPost, Category, User } = require('../models');

const updatedPost = async (title, content, id, userId) => {
 const post = await BlogPost.findByPk(id);
 if (post.dataValues.userId !== userId) {
  return { type: 401, message: 'Unauthorized user' };
}
 await BlogPost.update({
  title,
  content }, { where: { id } });
const update = await BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
    { model: Category, 
          as: 'categories',
  attributes: ['id', 'name'],
    through: { attributes: [] } },
  ],
});
return update;
};
module.exports = { updatedPost };