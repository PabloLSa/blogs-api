const { post, getAllPost } = require('../services/post.service');
const { updatedPost } = require('../services/updatePost.service');

const postBlog = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { dataValues } = req.user;
// const token = req.headers.authorization;
// const secret = process.env.JWT_SECRET;
// const email = Jwt.decode(token, secret);

  const response = await post({ title, content, categoryIds, userId: dataValues.id });
if (response.type) return res.status(response.type).json({ message: response.message });
  return res.status(201).json(response.message);

  //  console.log(email);
  // console.log(title, content, categoryIds);
};

const getAllPosts = async (_req, res) => {
  const posts = await getAllPost();
  // console.log(postData);
  return res.status(200).json(posts);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { dataValues } = req.user;
  const postUpdate = await updatedPost(title, content, id, dataValues.id);
  if (postUpdate.type) {
    return res.status(postUpdate.type).json({ message: postUpdate.message });
  }

  return res.status(200).json(postUpdate);
};

module.exports = { postBlog, getAllPosts, updatePost };