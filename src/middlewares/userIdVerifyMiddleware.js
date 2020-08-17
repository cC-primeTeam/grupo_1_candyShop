const db = require('../database/models');

let userIdVerifyMiddleware = {
  idOk: function(req, res, next) {
    db.Usuario.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.session.emailUsuario}
      }
    })
    .then(function(usuario) {
      if(usuario.id != req.params.id){
        return res.redirect('/')
      } else {
        next();
      }
    })
    }
  }
  module.exports = userIdVerifyMiddleware;