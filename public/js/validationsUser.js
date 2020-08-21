function qs (elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {

    let labelEmail = qs("label[for='email']");
    let inputEmail = qs("input#email");
    let errorEmail = qs("small#email");

    let ReRabelPassword = qs("label[for='password']");
    let inputPassword = qs("input#password");
    let errorPassword = qs("small#password");

    let labelReRassword = qs("label[for='rePassword']");
    let inputRePassword = qs("input#rePassword");
    let errorRePassword = qs("small#rePassword");

    let labelNameFantasy = qs("label[for='name_fantasy']");
    let inputNameFantasy = qs("input#name_fantasy");

    let btnCrearUsuario = qs("button[type='submit']#crear");

    let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    btnCrearUsuario.addEventListener('click', function(event){
        event.preventDefault();

        if(inputEmail.value.match(regexMail) == null) {
            console.log('VALIDANDO EMAIL');
        }
        if(inputPassword.value.match(regexPassword) == null && inputPassword.value < 1) {
            console.log('VALIDANDO PASSWORD');

            if(inputPassword.value != inputRePassword.value) {
                console.log('VALIDANDO REPASSWORD');
            }
            
        }
        
    })

})