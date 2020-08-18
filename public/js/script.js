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
  
  let selectProvincia = qs('select#province');
  let selectMunicipio = qs('select#municipality');
  let selectLocalidad = qs('input#location');
  let selectCPostal = qs('input#postal_code')
  
  fetch('https://apis.datos.gob.ar/georef/api/provincias')
  .then(function(response) {
    return response.json();
  })
  .then(function(resultado) {
    resultado.provincias.forEach(elemento => {
      selectProvincia.innerHTML += `<option value=${elemento.id}>${elemento.nombre}</option>`
    });
  });
  
  selectProvincia.addEventListener('change', function () {
    selectMunicipio.disabled = false;
    let valueProvincia = selectProvincia.options[selectProvincia.selectedIndex].value;
    fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${valueProvincia}&max=200`)
    .then(function(response) {
      return response.json();
    })
    .then(function(resultado) {
      selectMunicipio.innerHTML = `<option hidden>Selecciona una municipio...</option>`;
      resultado.departamentos.forEach(function(elemento) {
        selectMunicipio.innerHTML += `<option value=${elemento.id}>${elemento.nombre}</option>`
      });
    });
  });
  
  selectMunicipio.addEventListener('change', function () {
    selectLocalidad.disabled = false;
  });

  selectLocalidad.addEventListener('click', function () {
    selectCPostal.disabled = false;
  });
  
})