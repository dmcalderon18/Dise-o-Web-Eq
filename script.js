const carouselContainer = document.querySelector('.carousel-container');
const frames = document.querySelectorAll('.frame');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Mueve el carrusel al frame actual
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Botón anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : frames.length - 1;
    updateCarousel();
});

// Botón siguiente
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % frames.length;
    updateCarousel();
});

// Animación automática (opcional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % frames.length;
    updateCarousel();
}, 5000);
