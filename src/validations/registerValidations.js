const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');
// const fs = require('fs');
// const path = require('path');
// let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
// usuarios = JSON.parse(usuarios);

module.exports = [
    check('email')
      .isEmail().withMessage('Verifica el e-mail ingresado por favor!'),
    body('email')
      .custom(function(value) {
        for(let i = 0; i < usuarios.length; i++) {
          if(usuarios[i].email == value) {
            return false;
          }
        }
        return true
      }).withMessage('Este mail ya se encuentra registrado!'),
    check('password')
      .isLength({min: 8, max: 16}).withMessage('El password debe poseer entre 8 y 16 caracteres')
];