// function qs (elemento) {
//     return document.querySelector(elemento);
// }

// window.addEventListener('load', function() {
    
// })

// let inputNombre = qs('#nombre');
// let errorNombre = qs('#errNombre');
// let inputApellido = qs('#apellido');
// let errorApellido = qs('#errApellido');
// let inputEmail = qs('#email');
// let errorEmail = qs('#errEmail');
// let inputPassword = qs('#contrasena1');
// let errorPassword = qs('#errContrasena1');
// let inputRepassword = qs('#contrasena2');
// let errorRepassword = qs('#errContrasena2');
// let btnEnviar = qs("button[type='submit']");
// let inputTelefono = qs('#telefono');
// let errorTelefono = qs('#errTelefono');
// let inputDni = qs('#dni');
// let errorDni = qs('#errDni');
// let errorsBack = document.querySelectorAll('.errorsBack');
// let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// btnEnviar.addEventListener('click', function(e) {

//     if(errorsBack != undefined) {
//         errorsBack.forEach(function(elemento) {
//             elemento.innerText = ''
//         })
//     };
    
//     let errores = {};

//     if(inputNombre.value.length <= 2) {
//         errores.nombre = 'Como minimo 2 caracteres';
//     }
//     if(inputApellido.value.length <= 2) {
//         errores.apellido = 'Como minimo 2 caracteres';
//     }
//     if(!inputEmail.value.match(regexMail)) {
//         errores.email = 'Tiene que ser email';
//     }
//     if(inputPassword.value.length < 6) {
//         errores.password = 'Como minimo 6 caracteres';
//     }
//     if(inputPassword.value != inputRepassword.value) {
//         errores.repassword = 'Las contrasenas son diferentes';
//     }
//     if(inputDni.value.length < 6 || inputDni.value.length > 9){
//         errores.dni = 'Dni invalido';
//     }
//     if(inputTelefono.value.length < 8 || inputDni.value.length > 12){
//         errores.telefono = 'Telefono invalido';
//     }
//     if(Object.keys(errores).length != 0) {
//         e.preventDefault();
//         (errorNombre.innerText) = (errores.nombre) ? errores.nombre : '';
//         (errorApellido.innerText) = (errores.apellido) ? errores.apellido : '';
//         (errorEmail.innerText) = (errores.email) ? errores.email : '';
//         (errorPassword.innerText) = (errores.password) ? errores.password : '';
//         (errorRepassword.innerText) = (errores.repassword) ? errores.repassword : '';
//         (errorDni.innerText)= (errores.dni) ? errores.dni : '';
//         (errorTelefono.innerText)= (errores.telefono) ? errores.telefono : '';
//     }
// })