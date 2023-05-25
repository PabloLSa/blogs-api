const Express = require('express');
const { validateToken } = require('../auth/generateToken');
const { categories, getAllCat } = require('../controller/categoryController');

const categoryRouter = Express.Router();

categoryRouter.post('/', validateToken, categories);
categoryRouter.get('/', validateToken, getAllCat);
module.exports = categoryRouter;