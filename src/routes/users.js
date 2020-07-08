const express = require('express');
const router = express.Router();
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
//router.post('/create', upload.any(), usersController.store);

router.get('/registerEdit', usersController.registerEdit);
//router.post('/register', xxxxxxxxxx);
router.get('/login', usersController.login);
//router.post('/login', xxxxxxxxxx);

module.exports = router;
