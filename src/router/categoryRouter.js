const Express = require('express');
const { validateToken } = require('../auth/generateToken');
const { categories } = require('../controller/categoryController');

const categoryRouter = Express.Router();

categoryRouter.post('/', validateToken, categories);
module.exports = categoryRouter;