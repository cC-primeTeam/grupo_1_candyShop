const db = require('../database/models');

function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


let salesController = {
  purchase: function(req, res) {
    if (req.session.emailUsuario){
      db.Usuario.findOne({
        where:{
          email: {[db.Sequelize.Op.eq] : req.session.emailUsuario
          }
        },
        include: [{association: 'Prod'}]
      })
      .then(function (usuario) {
        // return res.send((usuario.id).toString())
        db.purchases.findAll({
          where:{
            user_id: {[db.Sequelize.Op.eq] : usuario.id
            }
          }
        })
        .then(function(purchases){
          let losProductos = usuario.Prod
          res.render('purchase', {losProductos:losProductos, usuario:usuario, milesGenerator: milSeparator, purchases:purchases});
        })
      })
      
    }
  },
  itemErase: function (req, res) {
    //       db.Product_User.destroy({
    //           where: {
    //               id_users: req.session.usuario.id,
    //               id_products: req.params.id
    //           }
    //       })
    //       .then(function () {
    //           res.redirect('/users/cart')
    //       })
  },
  itemAdd: function(req, res) {
    //       db.Product_User.findAll({
    //           where: {
    //               id_users: req.session.usuario.id,
    //               id_products: req.params.id
    //           }
    //       })
    //       .then(function(productos) {
    //           if(productos.length == 0) {
    //               db.Product_User.create({
    //                   id_users: req.session.usuario.id,
    //                   id_products: req.params.id
    //               })
    //               .then(function() {
    //                   res.redirect('/users/cart');
    //               })
    //           } else {
    //               res.redirect('/users/cart');
    //           }
    //       })
  },
  cartConfirm: function (req, res) {},
  cartClean: function (req, res) {}
}
module.exports = salesController;