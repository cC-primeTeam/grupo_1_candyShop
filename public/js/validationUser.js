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
  
  let labelProvince = qs("label[for='province']");
  let selectProvince = qs("select#province");
  let errorProvince = qs('small#province');
  
  let labelMunicipality = qs("label[for='municipality']");
  let selectMunicipality = qs("select#municipality");
  let errorMunicipality = qs('small#municipality');

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

  let labelFC = qs("label[for='fiscal_condition_id']");
  let selectFC = qs("select#fiscal_condition_id");
  let errorFC = qs('small#fiscal_condition_id');
  
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

    // if(inputEmail.value.length < 1) {
    //   errores.email = "Este campo es obligatorio"
    // } else {

    //   let emailFetch = async () => {
    //     let userExist = await fetch('http://localhost:3000/api/checkUser/' + inputEmail.value).then(result => result.json());
    //     return userExist;
    //   }
      
    //   let checkUser = emailFetch();

    //   if(inputEmail.value.match(regexMail) == null) {
    //     errores.email = "Inserta un email valido";
    //   } else {
    //     if(checkUser) {
    //       console.log(checkUser)
    //       errores.email = "Este mail ya existe"
    //     }
    //   }
    // }
    
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
    if(selectProvince.value == 'Selecciona una provincia...') {
      errores.province = "Debes seleccionar una provincia"
    }
    if(selectMunicipality.value == 'Selecciona una municipio...') {
      errores.municipality = "Debes seleccionar un municipio"
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
    if(selectFC.value == 'Selecciona una Condicion Fiscal...') {
      errores.fc = "Debes seleccionar Condicion Fiscal"
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
      if(errores.province) {
        labelProvince.classList.remove('success')
        labelProvince.classList.add('error')
        errorProvince.innerText = errores.province;
      } else {
        labelProvince.classList.remove('error')
        labelProvince.classList.add('success')
        errorProvince.innerText = '';
      }
      if(errores.municipality) {
        labelMunicipality.classList.remove('success')
        labelMunicipality.classList.add('error')
        errorMunicipality.innerText = errores.municipality;
      } else {
        labelMunicipality.classList.remove('error')
        labelMunicipality.classList.add('success')
        errorMunicipality.innerText = '';
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
      if(errores.fc) {
        labelFC.classList.remove('success')
        labelFC.classList.add('error')
        errorFC.innerText = errores.fc;
      } else {
        labelFC.classList.remove('error')
        labelFC.classList.add('success')
        errorFC.innerText = '';
      }
    } else {
      // Swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   title: 'Gracias. Ya podes loguearte !',
      //   text: 'El registro fue procesado correctamente.',
      //   showConfirmButton: false,
      //   timer: 3000
      // })
      let timerInterval
      Swal.fire({
        title: 'Estamos procesando tu información',
        html: 'Por favor aguardá <b></b> milliseconds.',
        timer: 3000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      setTimeout( function () { 
        elFormularioReg.submit();
      }, 3000);
      
    }
    
  })
})