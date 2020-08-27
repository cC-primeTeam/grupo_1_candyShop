function qs(element) {
    return document.querySelector(element)
}

//   console.log('ok');

let formNewsLetter = qs('form#newsletter');

let inputNewsLetter = qs('input#newsletter');
let errorNewsletter = qs('small#newsletter');

let buttonNewsLetter = qs('button#newsletter');

let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

window.addEventListener('load', function() {
    
    buttonNewsLetter.addEventListener('click', function(event){
        event.preventDefault(formNewsLetter);
        
        let errores = {};
        
        if(inputNewsLetter.value < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Debes ingresar un mail valido!',
                showConfirmButton: false,
                timer: 2000
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Gracias por suscribirte!',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout( function () { 
                formNewsLetter.submit();
            }, 2000);
        } 
    })
})