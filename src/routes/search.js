var express = require('express');
var router = express.Router();
let searchController = require('../controllers/searchController');

/* -------------------
   HOME
-------------------*/
router.get('/', searchController.prodFind);

module.exports = router;