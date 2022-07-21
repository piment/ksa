const Express = require('express');
const cors = require('cors');

const filesRouter = require('./router/file.router.js');
const userRouter = require('./router/user.router');

const port = process.env.PORT || 5000;
const app = Express();
app.use(cors());
app.use(Express.json());
app.use('/file', filesRouter);
app.use('/user', userRouter);


app.listen(port, () => {
  console.log('Server listening on port ' + port);
})