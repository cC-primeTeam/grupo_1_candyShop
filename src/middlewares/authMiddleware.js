function authMiddleware(req, res, next) {
  if(req.session.emailUsuario == undefined) {
      return res.redirect('/users/login')
  } else {
      next();
  }
}

module.exports = authMiddleware;