const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');
const {check, validationResult, body} = require('express-validator');

let usuariosJson = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf-8');
let usuarios = JSON.parse(usuariosJson);

let usersController = {
  
  index: function(req, res, next) {
    res.render('user');
  },

  register: function(req, res, next) {
    res.render('register');
  },

  save: function(req, res, next) {
    let errors = validationResult(req);
    if(errors.isEmpty()) {
      let nuevoUsuario = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename
      };
      usuarios.push(nuevoUsuario);
      fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));
      return res.redirect('login');
    } else {
      res.render('register', {
        errors: errors.mapped(),
        old: req.body
      });
    }
  },

  registerEdit: function(req, res, next) {
    res.render('registerEdit');
  },

  login: function(req, res, next) {
    res.render('login');
  },
  
  verify: function(req, res) {
    let errors = validationResult(req);
    if(errors.isEmpty()) {
      for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
          req.session.emailUsuario = usuarios[i].email;
          if(req.body.remember != undefined) {
            res.cookie('authRemember', usuarios[i].email, {maxAge: 60000 * 60 * 24 * 7}) //Vigente 1 semana!
          }
          return res.redirect('/users')
        }
      }
      return res.render('login', {
        errors: {
          email: {
            msg: 'Credenciales inválidas. Inserta un email registrado y su respectiva contraseña'
          }
        }
      })
    } else {
      res.render('login', {
        errors: errors.mapped(),
        old: req.body
      })
    }
  },

  users: function(req, res, next) {
    res.render('user', {
      usuario: req.session.emailUsuario
    });
  },
  logout: function(req, res, next) {
    req.session.destroy();
    res.cookie('authRemember', ''.email, {maxAge: -1});
    res.redirect('/');
  }
};

module.exports = usersController;