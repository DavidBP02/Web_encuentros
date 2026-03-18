// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        // Marcar como activo
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});

// Actualizar enlace activo al hacer scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Aquí iría la lógica para enviar el formulario
        // Por ahora, mostrar un mensaje de éxito
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        contactForm.reset();
    });
}

// Animación de entrada al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas y elementos
const cards = document.querySelectorAll('.card, .evento-card, .galeria-item');
cards.forEach(card => {
    observer.observe(card);
});

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
