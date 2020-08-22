function qs(element) {
    return document.querySelector(element)
  }
  
  window.addEventListener('load', function() {

    let labelEmail = qs("label[for='email']");
    let inputEmail = qs("input#email");
    let errorEmail = qs("small#email");
    
    let labelPassword = qs("label[for='password']");
    let inputPassword = qs("input#password");
    let errorPassword = qs("small#password");

    let btnSpan = qs("#eye");
    
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
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido!',
                text: 'CandyShop',
                showConfirmButton: false,
                timer: 5000
            })
            // alert('Gracias, el registro fue procesado correctamente, ahora si, logueate..')
            
        }
        setTimeout( function () { 
            elFormularioReg.submit();
        }, 3000);
    })
  })