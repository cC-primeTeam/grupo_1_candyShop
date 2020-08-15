const db = require('../database/models');

let adminMiddleware = {
  verify: function(req, res, next) {
    db.Usuario.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.session.emailUsuario}
      }
    })
    .then(function(usuario) {
      if(usuario.admin == false){
        return res.redirect('/')
      } else {
        next();
      }
    })
    }
  }
  module.exports = adminMiddleware;