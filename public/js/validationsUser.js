function qs (elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {

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

    let btnCrearUsuario = qs("button[type='submit']#crear");

    let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

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
        event.preventDefault();

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

            // errorEmail.innerText = (errores.email) ? errores.nombre : '';
            // errorPassword.innerText = (errores.password) ? errores.password : '';
            // errorRePassword.innerText = (errores.repassword) ? errores.repassword : '';
            // errorNameFantasy.innerText = (errores.namefanatasy) ? errores.namefanatasy : '';

        } else {
            alert('El formulario fue enviado')
        }
        
    })

})