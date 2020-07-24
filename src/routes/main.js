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

router.get('/session', function(req, res) {
   res.send(req.session);
 })

module.exports = router;