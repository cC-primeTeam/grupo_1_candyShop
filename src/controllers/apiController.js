const db = require('../database/models');

let apiController = {
  check: function(req, res, next) {
    db.Usuario.findOne({
      where: {
        email: req.params.email
      }
    })
    .then (function(result){
      // res.json(result)
      return res.json(result != null) ? true : false;
    })
  }
}
module.exports = apiController;