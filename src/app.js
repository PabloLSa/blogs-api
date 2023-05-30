const express = require('express');
const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categoryRouter');
const postRouter = require('./router/postRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
