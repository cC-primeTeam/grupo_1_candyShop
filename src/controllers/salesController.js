const db = require('../database/models');

let salesController = {
    cart: function(req, res) {
        //   db.User.findByPk(req.session.usuario.id , {
        //       include: [{association: 'product'}]
        //     })
        //   .then(function (usuario) {
        //       res.render('cart', {
        //           productos: usuario.product,
        //           id:req.params.id,
        //           session: req.session.usuario
        //       });
        //   })
    },
    cartAdd: function(req, res) {
        //   db.Product_User.findAll({
        //       where: {
        //           id_users: req.session.usuario.id,
        //           id_products: req.params.id
        //       }
        //   })
        //   .then(function(productos) {
        //       if(productos.length == 0) {
        //           db.Product_User.create({
        //               id_users: req.session.usuario.id,
        //               id_products: req.params.id
        //           })
        //           .then(function() {
        //               res.redirect('/users/cart');
        //           })
        //       } else {
        //           res.redirect('/users/cart');
        //       }
        //   })
    },
    cartDestroy: function (req, res) {
        //   db.Product_User.destroy({
        //       where: {
        //           id_users: req.session.usuario.id,
        //           id_products: req.params.id
        //       }
        //   })
        //   .then(function () {
        //       res.redirect('/users/cart')
        //   })
    }
}
module.exports = salesController;