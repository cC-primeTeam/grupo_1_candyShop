const db = require('../database/models');
const bcrypt = require ('bcrypt');

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
  },
  suspend: function(req, res, next) {
    db.Usuario.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.body.email}
      }
    })
    .then(function(usuario) {
      if (usuario && usuario.email == req.body.email && bcrypt.compareSync(req.body.password, usuario.password)){
      if(!usuario.active){
        res.locals.suspended = true
        // res.redirect('/users/suspend')
        res.render('login')
      } else {
        next();
      }
    } else {
      next();
    }
    })
  }
}
module.exports = userIdVerifyMiddleware;