document.querySelectorAll('.slider').forEach((slider, index) => {
    const slides = slider.querySelector('.slides');
    const slideCount = slider.querySelectorAll('.slide').length;

    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Troca a cada 3 segundos
});


// Mobile menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
