function qs(element) {
    return document.querySelector(element)
  }
  
  window.addEventListener('load', function() {
      
    let selectProvincia = qs('select#province');
    let selectMunicipio = qs('select#municipality');
    let selectLocalidad = qs('input#location');
    let selectCPostal = qs('input#postal_code')
    
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(function(response) {
      return response.json();
    })
    .then(function(resultado) {
      resultado.provincias.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1 );
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
        resultado.departamentos.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1 );
        selectMunicipio.innerHTML = `<option hidden>Selecciona una municipio...</option>`;
        resultado.departamentos.forEach(function(elemento) {
          selectMunicipio.innerHTML += `<option value=${elemento.id}>${elemento.nombre}</option>`
        });
      });
    });
    
    selectMunicipio.addEventListener('change', function () {
      selectLocalidad.disabled = false;
    });
       
    selectLocalidad.addEventListener('keydown', function(event) {
      if(selectLocalidad.value.length >= 5 && selectCPostal.disabled) {
        console.log("HABILITAR")
        selectCPostal.disabled = false;
      } else {
        selectCPostal.disabled = true
      }
    });
    
  })