let contador = 1;

setInterval(function() {
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if (counter > 5) {
        contador = 1;
    }
}, 3000);

//js slider comeco
const items1 = document.querySelectorAll('.slider1 .item');
const itemCount1 = items1.length;
let count1 = 0;

const items2 = document.querySelectorAll('.slider2 .item');
const itemCount2 = items1.length;
let count2 = 0;

//slider 1
setInterval(function() {
    items1[count1].classList.remove('active');

    if (count1 < itemCount1 - 1) {
        count1++;
    } else {
        count1 = 0;
    }

    items1[count1].classList.add('active');
}, 3000);
//fim slider 1

//slider 2
setInterval(function() {
    items2[count2].classList.remove('active');

    if (count2 < itemCount2 - 1) {
        count2++;
    } else {
        count2 = 0;
    }

    items2[count2].classList.add('active');
}, 3000);
//fim slider 2

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