document.addEventListener('DOMContentLoaded', function() {
    scroll_menu()
    scroll()
    count()
})
// onclick="window.open(this.href, '_blank'); return false;""



// Agregar efecto de desplazamiento al menú al hacer scroll
function scroll_menu() {
    window.addEventListener('scroll', function() {
        var menu = document.querySelector('.menu');
        var header = document.querySelector('.header');
        var headerBottom = header.offsetTop + header.offsetHeight;
        
        if (window.pageYOffset > headerBottom) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    });
}

  
// ... código JavaScript anterior ...

// Agregar funcionalidad al botón de alternancia del menú
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
function toggle() {
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
} 



function scroll() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    const allAnimatedElements = document.querySelectorAll('.qs-section');
    allAnimatedElements.forEach((element) => observer.observe(element));
}



