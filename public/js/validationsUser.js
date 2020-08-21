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

    let labelNameFantasy = qs("label[for='name_fantasy']");
    let inputNameFantasy = qs("input#name_fantasy");

    let btnCrearUsuario = qs("button[type='submit']")

    let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
    btnCrearUsuario.addEventListener('click', function (event) {
        event.preventDefault();

        if(inputEmail.value.match(regexMail) == null) {
            console.log('Tenes que ingresar un mail valido');
        }
        if(inputPassword.value.match(regexPassword) == null) {
            console.log('Tenes que ingresar un mail valido');
        }


        

    })

})