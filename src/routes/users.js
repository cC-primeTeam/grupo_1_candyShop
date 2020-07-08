var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/', usersController.index);
router.get('/register', usersController.register);
//router.post('/register', xxxxxxxxxx);
router.get('/registerEdit', usersController.registerEdit);
//router.post('/register', xxxxxxxxxx);
router.get('/login', usersController.login);
//router.post('/login', xxxxxxxxxx);

module.exports = router;
