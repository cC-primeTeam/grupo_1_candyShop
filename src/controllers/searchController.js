const db = require('../database/models');


function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let searchController = {
  prodFind: (req, res) => {
    db.Prod.findAll({
      where: {
        name: {
          [db.Sequelize.Op.like]: `%${req.query.find}%`
        }
      },
      order: [
        ['name']
      ]
    })
    .then(function (laBusqueda) {
      // return res.send(typeof laBusqueda[0])
      res.render('productsFind', {laBusqueda: laBusqueda, query: req.query.find, milesGenerator: milSeparator})
    })
    .catch(function (err) {
      res.send(
        err
      )
    })
  }
}

module.exports = searchController;