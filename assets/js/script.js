window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY >100) {
        nav.classList.add('bg-dark');
    } else {
        nav.classList.remove('bg-dark');
    }
});