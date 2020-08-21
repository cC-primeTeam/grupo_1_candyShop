function urlMiddleware (req, res, next) {
  // res.locals.fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.locals.originalUrl = req.originalUrl;
  next();
}

module.exports = urlMiddleware;