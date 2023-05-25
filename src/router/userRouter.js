const Express = require('express');
const verifyUser = require('../middlewares/userValidate.middleware');
const { createUser, getAll } = require('../controller/userController');
const { validateToken } = require('../auth/generateToken');

const userRouter = Express.Router();
userRouter.post('/', verifyUser, createUser);
userRouter.get('/', validateToken, getAll);

module.exports = userRouter;