var express = require('express');
var router = express.Router();

/* GET detalle producto. */
router.get('/', function(req, res, next) {
  res.render('detalleProducto', { title: 'Express' });
});

module.exports = router;
