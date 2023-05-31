const Express = require('express');
const verifyUser = require('../middlewares/userValidate.middleware');
const { createUser, getAll, getOne, deleteUser } = require('../controller/userController');
const { validateToken } = require('../auth/generateToken');

const userRouter = Express.Router();
userRouter.get('/', validateToken, getAll);
userRouter.get('/:id', validateToken, getOne);
userRouter.post('/', verifyUser, createUser);
userRouter.delete('/me', validateToken, deleteUser);

module.exports = userRouter;