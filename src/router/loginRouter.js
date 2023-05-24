const Express = require('express');
const verifyEmailAndPassword = require('../middlewares/validateLogin.middlerware');
const login = require('../controller/validateLogin');

const loginRouter = Express.Router();

loginRouter.post('/', verifyEmailAndPassword, login);
module.exports = loginRouter;