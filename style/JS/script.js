// Slider functionality
const slides = document.querySelectorAll('.slide');
const sliderNav = document.querySelector('.slider-nav');
let currentSlide = 0;

// Create navigation buttons
slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => goToSlide(index));
    if (index === 0) button.classList.add('active');
    sliderNav.appendChild(button);
});

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    sliderNav.children[currentSlide].classList.remove('active');
    
    slides[index].classList.add('active');
    sliderNav.children[index].classList.add('active');
    
    currentSlide = index;
}

// Auto advance slides
setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
}, 5000);

// Mobile menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// About section read more
const description = document.querySelector('.description');
const readMoreBtn = document.querySelector('.read-more');
const fullText = `A ABAP (Ação Beneficente Amor ao Próximo) é uma organização não governamental dedicada a promover a
melhoria da sociedade em várias frentes. Comprometida com o bem-estar coletivo, a ABRAP atua em diversas
áreas, desde a assistência social às comunidades carentes até a promoção da educação e dos recursos
básicos necessários para uma vida digna.`;
const shortText = fullText.slice(0, 200) + '...';

description.textContent = shortText;
let isExpanded = false;

readMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    description.textContent = isExpanded ? fullText : shortText;
    readMoreBtn.textContent = isExpanded ? 'Ler menos' : 'Ler mais';
    readMoreBtn.classList.toggle('expanded');
});
// Children section gallery
const childrenImages = [
    "style/imagens/index/menu01.jpg",
    "style/imagens/index/menu02.jpg",
    "style/imagens/index/menu03.jpg",
    "style/imagens/index/menu04.jpg"
];

const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelector('.thumbnails');

childrenImages.forEach((image, index) => {
    const thumb = document.createElement('img');
    thumb.src = image;
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.addEventListener('click', () => {
        mainImage.src = image;
    });
    thumbnails.appendChild(thumb);
});

// PIX copy functionality
const pixBtn = document.querySelector('.pix-btn');
pixBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('chavepix');
    alert('Chave PIX copiada!');
});