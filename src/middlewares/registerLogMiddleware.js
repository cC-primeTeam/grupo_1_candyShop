const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

function registerMiddleware(req, res, next) {
  let errors = validationResult(req);
  let errorsM = errors.mapped();
  let errorMail = ""
  if (errorsM.email) {
    errorMail = ', con error en el mail'
  };
  let errorPass = ""
  if (errorsM.password) {
    errorPass = ', con error en el password'
  };
  let sinMail = "No completo Mail"
  if (req.body.email) {
    sinMail = req.body.email
  }else{errorMail = ""}
  let sinPass = ", no completo password"
  if (req.body.password) {
    sinPass = ""
  }else{errorPass = ""}
  let creacionOK = ""
  if (!errorsM.email && !errorsM.password){
    creacionOK = ', se creo correctamente'
  }
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mao", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let dateObj = new Date();
  let month = monthNames[dateObj.getMonth()];
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  let output = day  + ' de '+ month  + ' del ' + year;
  
  fs.appendFileSync(path.join(__dirname, '../logs/registerLog.txt'), `Nuevo usuario: ${sinMail}${errorMail}${sinPass}${errorPass}${creacionOK}, el ${output}\n`)
  next();
}

module.exports = registerMiddleware;