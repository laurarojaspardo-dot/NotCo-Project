let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const typed = new Typed('.typed', {
    // strings: [
    //     '<span class="yellow">Cheese</span>',
    //     '<span class="blue">Milk</span>',
    //     '<span class="red">Icecream</span>', 
    //     '<span class="yellow">Burger</span>', 
    //     '<span class="blue">Cream</span>', 
    //     '<span class="redorange">Meat</span>', 
    //     '<span class="blue">Mayo</span>', 
    //     '<span class="purple">Chicken</span>', 
    //     '<span class="orange">Mila</span>',
    // ],
    stringsElement:'#cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 55,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|'
});

const homeImg = document.querySelector('.home-img');
const dynamicImg = document.querySelector('.dynamic-img');
const images = document.querySelectorAll('.dynamic-img li');
let currentIndex = 0;

function showImage(index) {
    const slideWidth = homeImg.clientWidth;
    const newPosition = index * -slideWidth;
    dynamicImg.style.transform = `translateX(${newPosition}px)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 3000);




menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}