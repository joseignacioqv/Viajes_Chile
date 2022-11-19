$(function(){ // Inicio de function//


    // tooltip "enviar correo" boton de cabecera //
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function() {
  if (window.pageYOffset >100) {
    nav.classList.add('bg-dark', 'shadow');
   } else {
    nav.classList.remove('bg-dark', 'shadow');
   }
  });

    
    }); // cierre de function //
