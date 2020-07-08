var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController');

router.get('/', mainController.index);



//VISTA MODELO
router.get('/model', function(req, res, next) {
  res.render('modelView');
})

module.exports = router;