function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {
    let header = qs('header');    
    let offset = qs('#offset');
    let espacio = 30;
    offset.style.height = (header.offsetHeight + espacio) + "px";
    window.addEventListener('resize', function() {
        offset.style.height = (header.offsetHeight + espacio) + "px";
    })
    console.log(header.offsetHeight + "px");

    //ARRANQUE CON FETCH PARA UTILIZAR LA API DE PROVINCIAS Y LOCALIDADES
    // fetch('https://apis.datos.gob.ar/georef/api/provincias')
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(resultado) {
    //     resultado.provincias.forEach(function(elemento) {
    //         console.log(elemento.nombre);
    //     })
    // })
})