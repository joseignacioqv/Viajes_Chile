$(function(){ // Inicio de function//


    // tooltip "enviar correo" boton de cabecera //

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // popover //

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // Al hacer scroll para a negro el navbar //
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
    if (window.pageYOffset >100) {
    nav.classList.add('bg-dark', 'shadow');
    } else {
    nav.classList.remove('bg-dark', 'shadow');
    }
    });

    }); // cierre de function //