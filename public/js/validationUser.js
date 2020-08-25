
function qs (elemento) {
  return document.querySelector(elemento);
}

window.addEventListener('load', function() {
  
  let elFormularioReg = qs("#elFormularioReg") //LA CDTMADREEEEE
  
  let labelEmail = qs("label[for='email']");
  let inputEmail = qs("input#email");
  let errorEmail = qs("small#email");
  
  let labelPassword = qs("label[for='password']");
  let inputPassword = qs("input#password");
  let errorPassword = qs("small#password");
  
  let labelRePassword = qs("label[for='rePassword']");
  let inputRePassword = qs("input#rePassword");
  let errorRePassword = qs("small#rePassword");
  
  let labelNameFantasy = qs("label[for='name_fantasy']");
  let inputNameFantasy = qs("input#name_fantasy");
  let errorNameFantasy = qs('small#name_fantasy');
  
  let inputProvince = qs("input#province");
  let errorProvince = qs('small#province');
  
  let labelLocation = qs("label[for='location']");
  let inputLocation = qs("input#location");
  let errorLocation = qs("small#location");
  
  let labelPostalCode = qs("label[for='postal_code']");
  let inputPostalCode = qs("input#postal_code");
  let errorPostalCode = qs("small#postal_code");
  
  let labelAdress = qs("label[for='adress']");
  let inputAdress = qs("input#adress");
  let errorAdress = qs("small#adress");
  
  let labelTelephone = qs("label[for='telephone']");
  let inputTelephone = qs("input#telephone");
  let errorTelephone = qs("small#telephone");
  
  let labelBusinessName = qs("label[for='business_name']");
  let inputBusinessName = qs("input#business_name");
  let errorBusinessName = qs("small#business_name");
  
  let labelCuit = qs("label[for='cuit']");
  let inputCuit = qs("input#cuit");
  let errorCuit = qs("small#cuit");
  
  let btnCrearUsuario = qs("button[type='submit']#crear");
  
  let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
  let regexCuit = /^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g;
  
  let btnSpan = qs("#eye");
  let btnSpanRePass = qs("#eyeRePass");
  
  btnSpan.addEventListener('click', function(event) {
    btnSpan.classList.toggle('hide');
    if(inputPassword.getAttribute('type') == "password") {
      inputPassword.setAttribute('type', 'text');
    } else {
      inputPassword.setAttribute('type', 'password');
    }
  })
  
  
  btnCrearUsuario.addEventListener('click', function(event){
    event.preventDefault(elFormularioReg);
    
    let errores = {};
    
    if(inputEmail.value.length < 1) {
      errores.email = "Este campo es obligatorio"
    } else {
      if(inputEmail.value.match(regexMail) == null) {
        errores.email = "Inserta un email valido";
      }
    }
    if(inputPassword.value.length < 1) {
      errores.password = "Este campo es obligatorio";
    } else {
      if(inputPassword.value.match(regexPassword) == null) {
        errores.password = "La contraseña debe tener 8 carateres como minimo y 16 como maximo. 1 Min, 1 May y un numero";
      }
    }
    if(inputRePassword.value.length < 1) {
      errores.repassword = "Este campo es obligatorio";
    } else {
      if(inputPassword.value != inputRePassword.value) {
        errores.repassword = "Las contraseñas deben coincidir";
      }
    }
    if(inputNameFantasy.value.length < 1) {
      errores.namefantasy = "Este campo es obligatorio";
    }
    if(inputLocation.value.length < 1) {
      errores.location = "Este campo es obligatorio";
    }
    if(inputPostalCode.value.length < 1) {
      errores.postal_code = "Este campo es obligatorio";
    }
    if(inputAdress.value.length < 1) {
      errores.adress = "Este campo es obligatorio";
    }
    if(inputTelephone.value.length < 1) {
      errores.telephone = "Este campo es obligatorio";
    }
    if(inputBusinessName.value.length < 1) {
      errores.businessname = "Este campo es obligatorio";
    }
    if(inputCuit.value.length < 1) {
      errores.cuit = "Este campo es obligatorio";
    } else {
      if(inputCuit.value.match(regexCuit) == null) {
        errores.cuit = "Debes introducir un CUIT valido"
      }
    }
    
    if(Object.keys(errores).length >= 1) {
      if(errores.email) {
        labelEmail.classList.remove('success')
        labelEmail.classList.add('error')
        errorEmail.innerText = errores.email;
      } else {
        labelEmail.classList.remove('error')
        labelEmail.classList.add('success')
        errorEmail.innerText = '';
      }
      if(errores.password) {
        labelPassword.classList.remove('success')
        labelPassword.classList.add('error')
        errorPassword.innerText = errores.password;
      } else {
        labelPassword.classList.remove('error')
        labelPassword.classList.add('success')
        errorPassword.innerText = '';
      }
      if(errores.repassword) {
        labelRePassword.classList.remove('success')
        labelRePassword.classList.add('error')
        errorRePassword.innerText = errores.repassword;
      } else {
        labelRePassword.classList.remove('error')
        labelRePassword.classList.add('success')
        errorRePassword.innerText = '';
      }
      if(errores.namefantasy) {
        labelNameFantasy.classList.remove('success')
        labelNameFantasy.classList.add('error')
        errorNameFantasy.innerText = errores.namefantasy;
      } else {
        labelNameFantasy.classList.remove('error')
        labelNameFantasy.classList.add('success')
        errorNameFantasy.innerText = '';
      }
      if(errores.location) {
        labelLocation.classList.remove('success')
        labelLocation.classList.add('error')
        errorLocation.innerText = errores.location;
      } else {
        labelLocation.classList.remove('error')
        labelLocation.classList.add('success')
        errorLocation.innerText = '';
      }
      if(errores.postal_code) {
        labelPostalCode.classList.remove('success')
        labelPostalCode.classList.add('error')
        errorPostalCode.innerText = errores.postal_code;
      } else {
        labelPostalCode.classList.remove('error')
        labelPostalCode.classList.add('success')
        errorPostalCode.innerText = '';
      }
      if(errores.adress) {
        labelAdress.classList.remove('success')
        labelAdress.classList.add('error')
        errorAdress.innerText = errores.adress;
      } else {
        labelAdress.classList.remove('error')
        labelAdress.classList.add('success')
        errorAdress.innerText = '';
      }
      if(errores.telephone) {
        labelTelephone.classList.remove('success')
        labelTelephone.classList.add('error')
        errorTelephone.innerText = errores.telephone;
      } else {
        labelTelephone.classList.remove('error')
        labelTelephone.classList.add('success')
        errorTelephone.innerText = '';
      }
      if(errores.businessname) {
        labelBusinessName.classList.remove('success')
        labelBusinessName.classList.add('error')
        errorBusinessName.innerText = errores.businessname;
      } else {
        labelBusinessName.classList.remove('error')
        labelBusinessName.classList.add('success')
        errorBusinessName.innerText = '';
      }
      if(errores.cuit) {
        labelCuit.classList.remove('success')
        labelCuit.classList.add('error')
        errorCuit.innerText = errores.cuit;
      } else {
        labelCuit.classList.remove('error')
        labelCuit.classList.add('success')
        errorCuit.innerText = '';
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias. Ya podes loguearte !',
        text: 'El registro fue procesado correctamente.',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout( function () { 
        elFormularioReg.submit();
      }, 3000);
      
    }
    
  })
})