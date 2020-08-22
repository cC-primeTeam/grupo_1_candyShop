const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');

module.exports = [
  check('email')
  .isEmail().withMessage('Verifica el e-mail ingresado por favor! ya que no tiene el formato correcto'),
  
  check('password')
  .isLength({min: 8, max: 16}).withMessage('El password debe poseer entre 8 y 16 caracteres'),

  body('email')
  .custom(async function(value) {
    let usuario = await db.Usuario.findOne({
      where:{
        email:value
      }
    })
    .then(function(elUsuario){
      if (elUsuario){
        return true
      } else {
        throw Error ('Este mail no se encuentra registrado!')
      }
    })
    return usuario
  })
]