const Express = require('express');
const postController = require('../controller/post.Controller');
const { validateToken } = require('../auth/generateToken');
const { checkCategory } = require('../middlewares/checkCategoryIds.middlewear');
const { verifyBlog } = require('../middlewares/post.middlewares');

const postRouter = Express.Router();

postRouter.post('/', validateToken, verifyBlog, checkCategory, postController.postBlog);
postRouter.get('/', validateToken, postController.getAllPosts);
module.exports = postRouter;