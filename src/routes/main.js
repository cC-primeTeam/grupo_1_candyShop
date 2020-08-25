const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

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