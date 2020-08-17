const db = require('../database/models');

function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
let mainController = {
  //TOP PRODUCTS - Vista index web
  index: function(req, res, next) {
    db.Category.findAll()
    .then(function(laCategoria){
      db.Prod.findAll({
        include:[{association: 'Category'}],
        where:{
          top_check: {[db.Sequelize.Op.eq] : 1}
        }
      })
      .then(function(losProductos) {
        res.render('index', {losProductos:losProductos, laCategoria:laCategoria, milesGenerator: milSeparator})
      })
    })
  }
}
module.exports = mainController;




// const db = require('../database/models');
// const lasCategoriasMiddleware = require('../middlewares/lasCategoriasMiddleware');

// function milSeparator(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }


// let mainController = {
//   //TOP PRODUCTS - Vista index web
//   index: function(req, res, next) {

//     db.Prod.findAll({
//       include:[{association: 'Category'}],
//       where:{
//         top_check: {[db.Sequelize.Op.eq] : 1}
//       }
//     })
//     .then(function(losProductos) {
//       let milanesa = 'las categorias devuelve objeto promesa'//lasCategoriasMiddleware();
//       res.render('index', {losProductos:losProductos, milanesa:milanesa, milesGenerator: milSeparator})
//     })
//   }
// }
// module.exports = mainController;


