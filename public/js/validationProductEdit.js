function qs (elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    //console.log('funcionando');
    
    let formprod = qs("#formprod");
    
    let labelName = qs("label[for='name']");
    let inputName = qs("input#name");
    let errorName = qs("small#name");
    
    let labelCategory = qs("label[for='category']");
    let selectCategory = qs("select#category");
    let errorCategory = qs("small#category");
    
    let labelDetail = qs("label[for='detail']");
    let inputDetail = qs("textarea#detail");
    let errorDetail = qs("small#detail");
    
    let labelStock = qs("label[for='stock']");
    let inputStock = qs("input#stock");
    let errorStock = qs("small#stock");
    
    let labelPrice = qs("label[for='price']");
    let inputPrice = qs("input#price");
    let errorPrice = qs("small#price");
    
    let labelTop_check = qs("label[for='top_check']");
    let inputTop_check = qs("input#top_check");
    let errorTop_check = qs("small#top_check");
    
    let labelOffer_check = qs("label[for='offer_check']");
    let inputOffer_check = qs("input#offer_check");
    let errorOffer_check = qs("small#offer_check");
    
    let labelOffer_discount = qs("label[for='offer_discount']");
    let inputOffer_discount = qs("input#offer_discount");
    let errorOffer_discount = qs("small#offer_discount");
    
    btnGuardarProd = qs("button[type='submit']#guardar");
    
    btnGuardarProd.addEventListener('click', function(event) {
        event.preventDefault(formprod);
        
        let errores = {};
        
        if(inputName.value.length < 1) {
            errores.name = "Este campo es obligatorio"
        }
        if(selectCategory.value == 'Seleccione una opcion...') {
            errores.category = "Debes seleccionar una categoria"
          }
        // if(inputDetail.value.length < 1) {
        //     errores.detail = "Este campo es obligatorio"
        // }
        
        
        if(Object.keys(errores).length >=1) {
            if(errores.name) {
                labelName.classList.remove('success')
                labelName.classList.add('error')
                errorName.innerText = errores.name;
            } else {
                labelName.classList.remove('error')
                labelName.classList.add('success')
                errorName.innerText = '';
            }
            if(errores.category) {
                labelCategory.classList.remove('success')
                labelCategory.classList.add('error')
                errorCategory.innerText = errores.category;
            } else {
                labelCategory.classList.remove('error')
                labelCategory.classList.add('success')
                errorCategory.innerText = '';
            }
            if(errores.detail) {
                labelDetail.classList.remove('success')
                labelDetail.classList.add('error')
                errorDetail.innerText = errores.detail;
            } else {
                labelDetail.classList.remove('error')
                labelDetail.classList.add('success')
                errorDetail.innerText = '';
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Gracias!',
                text: 'Producto Creado con Exito',
                showConfirmButton: false,
                timer: 3000
              })
              setTimeout( function () { 
                formprod.submit();
              }, 3000);
        }
    })
    
})