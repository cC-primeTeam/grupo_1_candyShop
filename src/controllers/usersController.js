const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');

let usuariosJson = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf-8');
let usuarios = JSON.parse(usuariosJson);

let usersController = {
  index: function(req, res, next) {
    res.render('user');
  },
  register: function(req, res, next) {
    res.render('register');
  },
  save: function (req, res, next){
    let nuevoUsuario = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename
    };
    usuarios.push(nuevoUsuario);
    fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));

    res.redirect('/')

  },
  registerEdit: function(req, res, next) {
    res.render('registerEdit');
  },
  login: function(req, res, next) {
    res.render('login');
  },
  
}
module.exports = usersController;