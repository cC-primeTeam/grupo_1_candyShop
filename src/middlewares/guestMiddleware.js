function guestMiddleware(req, res, next) {
  if(req.session.emailUsuario != undefined) {
      return res.redirect('/users')
  } else {
      next();
  }
}

module.exports = guestMiddleware;