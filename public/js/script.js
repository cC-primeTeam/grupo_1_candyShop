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

})