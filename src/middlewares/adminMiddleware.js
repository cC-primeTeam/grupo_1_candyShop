const db = require('../database/models');

function adminMiddleware(req, res, next) {
let ok = async function(value) {


    let usuario = await db.Usuario.findOne({ where:{ email:req.session.emailUsuario } })
    .then(function(elUsuario){
    return elUsuario.admin
  })
 
  return usuario
}
 console.log('***************' + ok)
}
  

//VALIDACION ADMINISTRADORES CORREGIR, POR AHORA SOLO VALIDA = QUE AUTHMIDDLEWARE
//     if(req.session.emailUsuario == undefined) {
//       return res.redirect('/users/login')
//   } else {
//       next();
//   }
// }

module.exports = adminMiddleware;