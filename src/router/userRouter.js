const Express = require('express');
const verifyUser = require('../middlewares/userValidate.middleware');
const { createUser, getAll } = require('../controller/userController');
const { validateToken } = require('../auth/generateToken');

const userRouter = Express.Router();
userRouter.get('/', validateToken, getAll);
userRouter.post('/', verifyUser, createUser);

module.exports = userRouter;