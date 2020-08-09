const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');
const bcrypt = require ('bcrypt');

// const fs = require ('fs');
// const path = require ('path');
// let usuariosJson = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf-8');
// let usuarios = JSON.parse(usuariosJson);

let usersController = {
  list: function(req, res, next) {
    db.Usuario.findAll()
    .then(function(losUsuarios) {
      res.render('listUsers', {losUsuarios})
    })
  },
  detail: function(req, res, next) {
    db.Usuario.findByPk(req.params.id, {
    })
    .then(function(jsonusuario) {
      res.send(jsonusuario)
    })
  },
  listUsrManagementForAdmin: function(req, res, next) {
    db.Usuario.findByPk(req.params.id)
    .then(function(elUsuario) {
      let adminStat = elUsuario.admin == true ? 'SI, ES ADMINISTRADOR' : 'NO, ES USUARIO';
      let activeStat = elUsuario.active == true ? 'SI, EL USUARIO ESTA ACTIVO' : 'NO, EL USUARIO ESTA SUSPENDIDO';
      res.render('userManagementForAdmin', {elUsuario:elUsuario, adminStat, activeStat});
    })
  },
  usrManagementForAdmin: function(req, res) {
    db.Usuario.update({
      email: req.body.email,
      password: req.body.password,
      adress: req.body.adress,
      location: req.body.location,
      province: req.body.province,
      postal_code: req.body.postal_code,
      telephone: req.body.telephone,
      name_fantasy: req.body.name_fantasy,
      business_name: req.body.business_name,
      cuit: req.body.cuit,
      fiscal_condition: req.body.fiscal_condition,
      admin: req.body.admin,
      active: req.body.active         
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect('/users/list');
    }); 
  },
  users: function(req, res, next) {
    db.Usuario.findAll()
    .then(function(usuarios) {
      let usrID = req.session.emailUsuario;
      let elUsuario  = usuarios.find(user => user.email == usrID);
      res.render('user', {elUsuario});
    })
  },
  register: function(req, res) {
    res.render('register');
  },
  save: function(req, res, next) {
    let errors = validationResult(req);
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
        fiscal_condition: req.body.fiscal_condition,
        image: req.files[0].filename,
        admin: 0,
        active: 1
      })
      .then(function(resultado) {
        res.redirect('login');
      });
    }else {
      res.render('register', {
        errors: errors.mapped(),
        old: req.body
      });
    }
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
    }
    )},
    logout: function(req, res, next) {
      req.session.destroy();
      res.cookie('authRemember', ''.email, {maxAge: -1});
      res.redirect('/');
    },
    registerEdit: function(req, res, next) {
      db.Usuario.findByPk(req.params.id)
      .then(function(elUsuario) {
        res.render('registerEdit', {elUsuario:elUsuario});
      })
    },
    registerUpdate: function(req, res) {
      db.Usuario.update({
        email: req.body.email,
        password: req.body.password,
        adress: req.body.adress,
        location: req.body.location,
        province: req.body.province,
        postal_code: req.body.postal_code,
        telephone: req.body.telephone,
        name_fantasy: req.body.name_fantasy,
        business_name: req.body.business_name,
        cuit: req.body.cuit,
        fiscal_condition: req.body.fiscal_condition,
        image: req.files[0].filename,
        admin: 1,
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
    },
    
    
    
    
    
    
    
    
    
    
    // index: function(req, res, next) {
    //   res.render('user');
    // },
    // register: function(req, res, next) {
    //   res.render('register');
    // },
    // save: function(req, res, next) {
    //   let errors = validationResult(req);
    //   if(errors.isEmpty()) {
    //     let nuevoUsuario = {
    //       email: req.body.email,
    //       password: bcrypt.hashSync(req.body.password, 10),
    //       avatar: req.files[0].filename
    //     };
    //     usuarios.push(nuevoUsuario);
    //     fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));
    //     return res.redirect('login');
    //   } else {
    //     res.render('register', {
    //       errors: errors.mapped(),
    //       old: req.body
    //     });
    //   }
    // },
    // registerEdit: function(req, res, next) {
    //   res.render('registerEdit');
    // },
    // login: function(req, res, next) {
    //   res.render('login');
    // },
    
    // verify: function(req, res) {
    //   let errors = validationResult(req);
    //   if(errors.isEmpty()) {
    //     for(let i = 0; i < usuarios.length; i++) {
    //       if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
    //         req.session.emailUsuario = usuarios[i].email;
    //         if(req.body.remember != undefined) {
    //           res.cookie('authRemember', usuarios[i].email, {maxAge: 60000 * 60 * 24 * 7}) //Vigente 1 semana!
    //         }
    //         return res.redirect('/users')
    //       }
    //     }
    //     return res.render('login', {
    //       errors: {
    //         email: {
    //           msg: 'Credenciales inválidas. Inserta un email registrado y su respectiva contraseña'
    //         }
    //       }
    //     })
    //   } else {
    //     res.render('login', {
    //       errors: errors.mapped(),
    //       old: req.body
    //     })
    //   }
    // },
    // users: function(req, res, next) {
    
    //   let usrID = req.session.emailUsuario;
    //   let elUsuario  = usuarios.find(user => user.email == usrID);
    //   res.render('user', {
    //     usuario: req.session.emailUsuario,
    //     elUsuario
    //   });
    // },
    // logout: function(req, res, next) {
    //   req.session.destroy();
    //   res.cookie('authRemember', ''.email, {maxAge: -1});
    //   res.redirect('/');
    // }
  }
  module.exports = usersController;
  
  
  
  
  // module.exports = {
  //   list: function(req, res) {
  //       db.Pelicula.findAll({
  //           include:[{association: 'Genre'}]
  //       })
  //       .then(function(resultado) {
  //           res.render('listadoPeliculas', {
  //               peliculas: resultado
  //           })
  //       })
  //   },
  //   detail: function(req, res, next) {
  //       db.Pelicula.findByPk(req.params.idPelicula, {
  //           include: [{association: 'Genre'}]
  //       })
  //       .then(function(resultado) {
  //           res.render('detallePelicula', {
  //               pelicula: resultado
  //           })
  //       })
  //   },
  //   create: function(req, res) {
  //       res.render('create');
  //   },
  //   add: function(req, res) {
  //       db.Pelicula.create({
  //           title: req.body.title,
  //           rating: req.body.rating,
  //           awards: req.body.awards,
  //           release_date: req.body.release_date,
  //           length: req.body.length
  //       })
  //       .then(function(resultado) {
  //           res.redirect('/movies');
  //       });
  //   },
  //   update: function(req, res) {
  //       db.Pelicula.update({
  //           title: req.body.title,
  //           rating: req.body.rating,
  //           awards: req.body.awards,
  //           release_date: req.body.release_date,
  //           length: req.body.length,            
  //       },
  //       {
  //           where: {
  //               id: req.params.idPelicula
  //           }
  //       })
  //       .then(function(resultado) {
  //           res.redirect('/movies/detail' + req.params.idPelicula);
  //       }); 
  //   },
  //   delete: function(req, res) {
  //       db.Pelicula.destroy({
  //           where: {
  //               id: req.params.idPelicula
  //           }
  //       })
  //       .then(function(resultado) {
  //           res.redirect('/movies');
  //       });
  //   },
  //   dramaOne: function(req, res) {
  //       db.Pelicula.findOne({
  //           where:{
  //               genre_id: 3
  //           }
  //       })
  //       .then(function(peliculasDrama){
  //           res.render('peliculasDramaFindOne', {peliculas:peliculasDrama})
  //       })
  //   },
  //   dramaAll: function(req, res) {
  //       db.Pelicula.findAll({
  //           where:{
  //               genre_id: 3
  //           }
  //       })
  //       .then(function(peliculasDrama){
  //           res.render('peliculasDramaFindAll', {peliculas:peliculasDrama})
  //       })
  //   },
  //   top: function(req, res) {
  //       db.Pelicula.findAll({
  //           where:{
  //               rating: {[db.Sequelize.Op.gt] : 8}
  //           },
  //           order: [
  //               ['rating', 'DESC']            
  //           ],
  //           limit: 2
  //       })
  //       .then(function(peliculasDrama){
  //           res.render('top', {peliculas:peliculasDrama})
  //       })
  //   },
  //   totalTime: function(req, res) {
  //       db.Pelicula.sum('length')
  //           .then(function(resultado){
  //               res.send('La duracion total de las peliculas en nuestra base de datos es de ' + resultado + ' minutos.')
  //           })
  //       }
  
  // }