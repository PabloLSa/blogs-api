const { post } = require('../services/post.service');

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
module.exports = { postBlog };