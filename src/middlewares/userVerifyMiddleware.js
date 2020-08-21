const db = require('../database/models');

let userVerifyMiddleware = {
  admin: function(req, res, next) {
    if (req.session.emailUsuario){
    db.Usuario.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.session.emailUsuario}
      }
    })
    .then(function(usuario) {
      if(usuario.admin == false){
        res.locals.adminVerify = false
        next();
      } 
      else {
        res.locals.adminVerify = true
        next();
      }
    })
    } else {
      res.locals.adminVerify = false
      next();
    }
  },
  usuario: function(req, res, next) {
    if (req.session.emailUsuario){
    db.Usuario.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.session.emailUsuario}
      }
    })
    .then(function(usuario) {
      if(usuario.admin == false){
        res.locals.userVerify = true
        next();
      } 
      else {
        res.locals.userVerify = false
        next();
      }
    })
    } else {
      res.locals.userVerify = false
      next();
    }
  },
  session: function(req, res, next) {
    if (req.session.emailUsuario){
        res.locals.sessVerify = true
        next();
      
    } else {
      res.locals.sessVerify = false
      next();
    }
  }
}
  module.exports = userVerifyMiddleware;