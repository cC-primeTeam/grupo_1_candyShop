function qs(element) {
    return document.querySelector(element)
  }
  
  let formSearch = qs('form.search-form');
  let inputSearch = qs('input.search-form_input');
  let buttonSearch = qs('button.search-form_button');

  window.addEventListener('load', function() {
    
    buttonSearch.addEventListener('click', function(event){
        event.preventDefault(formSearch);

      if(inputSearch.value.length < 1) {
        Swal.fire({
            icon: 'question',
            title: 'No encontramos nada!',
            text: 'Por favor completá el campo de búsqueda',
            showConfirmButton: false,
            timer: 5000
          })
      } else {
        setTimeout( function () { 
            formSearch.submit();
          }, 5);
      } 
    })
  })