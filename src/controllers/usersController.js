const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');
const bcrypt = require ('bcrypt');

let usersController = {
  list: function(req, res, next) {
    db.Usuario.findAll({
      include:[{association: 'FiscalC'}]
    })
    .then(function(losUsuarios) {
      res.render('listUsers', {losUsuarios:losUsuarios})
    })
  },
  detail: function(req, res, next) {
    db.Usuario.findByPk(req.params.id, {
      include:[{association: 'FiscalC'}]
    })
    .then(function(jsonusuario) {
      res.send(jsonusuario)
    })
  },
  usrManage: function(req, res, next) {
    db.Usuario.findByPk(req.params.id,{
      include:[{association: 'FiscalC'}]
    })
    .then(function(elUsuario) {
      let adminStat = elUsuario.admin == true ? 'SI, ES ADMINISTRADOR' : 'NO, ES USUARIO';
      let activeStat = elUsuario.active == true ? 'SI, EL USUARIO ESTA ACTIVO' : 'NO, EL USUARIO ESTA SUSPENDIDO';
      res.render('userManagementForAdmin', {elUsuario:elUsuario, adminStat, activeStat});
    })
  },
  usrManageUpdt: function(req, res) {
    db.Usuario.update({
      email: req.body.email,
      password: (!req.body.password) ? this.password : bcrypt.hashSync(req.body.password, 10),
      adress: req.body.adress,
      location: req.body.location,
      province: req.body.province,
      postal_code: req.body.postal_code,
      telephone: req.body.telephone,
      name_fantasy: req.body.name_fantasy,
      business_name: req.body.business_name,
      cuit: req.body.cuit,
      fiscal_condition_id: req.body.fiscal_condition_id,
      image: (!req.files[0]) ? this.imagen_usuario : req.files[0].filename,
      admin: req.body.admin,
      active: req.body.active         
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect('/users/listUsersForAdmin');
    }); 
  },
  users: function(req, res, next) {
    db.Usuario.findAll()
    .then(function(usuarios) {
      let usrID = req.session.emailUsuario;
      let elUsuario  = usuarios.find(user => user.email == usrID);
      res.render('user', {elUsuario:elUsuario});
    })
  },
  register: function(req, res, next) {
    db.FiscalC.findAll()
    .then(function(fiscalCond){
      return res.render('register', {fiscalCond:fiscalCond})
    })
  },
  save: function(req, res, next) {
    let errors = validationResult(req);
    db.FiscalC.findAll()
  .then(function(fiscalCond){
    if(errors.isEmpty()) {
      db.Usuario.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        adress: req.body.adress,
        location: req.body.location,
        province: req.body.province,
        postal_code: req.body.postal_code,
        telephone: req.body.telephone,
        name_fantasy: req.body.name_fantasy,
        business_name: req.body.business_name,
        cuit: req.body.cuit,
        fiscal_condition_id: req.body.fiscal_condition_id,
        image: (req.files[0] == undefined) ? 'no-image.jpg' : req.files[0].filename,
        admin: 0,
        active: 1
      })
      .then(function(resultado) {
        res.redirect('login');
      });
    } else {
      res.render('register', {fiscalCond:fiscalCond,
        errors: errors.mapped(),
        old: req.body
      });
    }
    })
  },
  login: function(req, res, next) {
    res.render('login');
  },
  verify: function(req, res, next) {
    let errors = validationResult(req);
      db.Usuario.findAll()
      .then(function(usuarios) {
        if(errors.isEmpty()) {
          for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
              req.session.emailUsuario = usuarios[i].email;
              if(req.body.remember != undefined) {
                res.cookie('authRemember', usuarios[i].email, {maxAge: 60000 * 60 * 24 * 7}) //Vigente 1 semana!
              }
              res.redirect('/users')
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
      }
    )},
      logout: function(req, res, next) {
        req.session.destroy();
        res.cookie('authRemember', ''.email, {maxAge: -1});
        res.redirect('/');
      },      
      regEdit: function(req, res, next) {
        db.Usuario.findByPk(req.params.id)
        .then(function(elUsuario) {
          db.FiscalC.findAll()
          .then(function(fiscalCond){
            let fiscalCheck = elUsuario.fiscal_condition_id == fiscalCond.id ? 'selected' : '';
            res.render('registerEdit', {elUsuario:elUsuario, fiscalCond:fiscalCond, fiscalCheck});
          })
        })
      },
      regUpdt: function(req, res) {
        db.Usuario.update({
          email: req.body.email,
          password: (!req.body.password) ? this.password : bcrypt.hashSync(req.body.password, 10),
          adress: req.body.adress,
          location: req.body.location,
          province: req.body.province,
          postal_code: req.body.postal_code,
          telephone: req.body.telephone,
          name_fantasy: req.body.name_fantasy,
          business_name: req.body.business_name,
          cuit: req.body.cuit,
          fiscal_condition_id: req.body.fiscal_condition_id,
          image: (!req.files[0]) ? this.image : req.files[0].filename,
          active: 1         
        },
        {
          where: {
            id: req.params.id
          }
        })
        .then(function() {
          res.redirect('/users');
        }); 
      }
    }
    module.exports = usersController;