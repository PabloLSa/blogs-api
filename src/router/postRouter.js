const Express = require('express');
const postController = require('../controller/post.Controller');
const { validateToken } = require('../auth/generateToken');
const { checkCategory } = require('../middlewares/checkCategoryIds.middlewear');
const { verifyBlog } = require('../middlewares/post.middlewares');
const { getPostById } = require('../services/getPostById.service');

const postRouter = Express.Router();

postRouter.post('/', validateToken, verifyBlog, checkCategory, postController.postBlog);
postRouter.get('/', validateToken, postController.getAllPosts);
postRouter.get('/:id', validateToken, getPostById);
module.exports = postRouter;