function adminMiddleware(req, res, next) {

//VALIDACION ADMINISTRADORES CORREGIR, POR AHORA SOLO VALIDA = QUE AUTHMIDDLEWARE
    if(req.session.emailUsuario == undefined) {
      return res.redirect('/users/login')
  } else {
      next();
  }
}

module.exports = adminMiddleware;