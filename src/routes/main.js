var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController');

/* -------------------
   HOME
-------------------*/
router.get('/', mainController.index);

/* -------------------
   VISTA P/ PRUEBAS
-------------------*/
router.get('/model', function(req, res, next) {
  res.render('modelView');
})

module.exports = router;