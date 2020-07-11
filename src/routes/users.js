const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

router.get('/', usersController.index);

//CREAR UN USUARIO
router.get('/register', usersController.register);
router.post('/register', upload.any(), usersController.save);

//EDITAR USUARIO
router.get('/registerEdit', usersController.registerEdit);
//router.post('/register', xxxxxxxxxx);

// LOGIN
router.get('/login', usersController.login);
router.post('/login', usersController.verify);
//verofoca el form de login
//router.post('/login', xxxxxxxxxx);

module.exports = router;
