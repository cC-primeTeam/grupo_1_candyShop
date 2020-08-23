const db = require('../database/models');

function authCookieMiddleware(req, res, next) {
  if(req.cookies.authRemember){
    db.Usuario.findOne({
      where:{
        email:req.cookies.authRemember
      }
    })
    .then(function(users) {
      // return res.send(users.email)
      if(req.session.emailUsuario == undefined) {
        req.session.emailUsuario = users.email
      }
      
    })
    next();
  } else {
  next();
}
}
module.exports = authCookieMiddleware;













// const db = require('../database/models');
// // const fs = require('fs');
// // const path = require('path');

// // let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
// // usuarios = JSON.parse(usuarios);
// function authCookieMiddleware(req, res, next) {
//     db.Usuario.findAll()
//     .then(function(usuarios) {
//         if(req.cookies.authRemember != undefined && req.session.usuario == undefined) {
//             for(let i = 0; i < usuarios.length; i++) {
//                 if(req.cookies.authRemember == usuarios[i].email) {
//                     req.session.usuario = usuarios[i].email
//                 }
//             }
//         }
//         next();
//     })
// }



// // function authCookieMiddleware(req, res, next) {
// //     // for(let i = 0; i < usuarios.length; i++) {
// //         db.Usuario.findOne({
// //             where:{
// //                 email: {[db.Sequelize.Op.eq] : req.cookies.emailUsuario}
// //             }
// //         })
// //         .then(function(usuario) {
// //                                 if(req.cookies.authRemember != undefined && req.session.emailUsuario == undefined) {
// //             if(usuario) {
// //                 req.session.emailUsuario = usuario
// //             }
// //         }

// //         next();
// //     })
// // }

// module.exports = authCookieMiddleware;