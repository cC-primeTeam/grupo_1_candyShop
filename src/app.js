require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session');
const authCookieMiddleware = require('./middlewares/authCookieMiddleware');
const lasCategoriasMiddleware = require('./middlewares/lasCategoriasMiddleware');
const urlMiddleware = require('./middlewares/urlMiddleware');
const userVerifyMiddleware = require('./middlewares/userVerifyMiddleware');

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const salesRouter = require('./routes/sales');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const apiRouter = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({secret: 'session secret candyShop'}));

app.use(authCookieMiddleware);
app.use(lasCategoriasMiddleware);
app.use(urlMiddleware);
app.use(userVerifyMiddleware.admin);
app.use(userVerifyMiddleware.usuario);
app.use(userVerifyMiddleware.session);





//Rutas
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/sales', salesRouter);
app.use('/search', searchRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
