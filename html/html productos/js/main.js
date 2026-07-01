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
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|'
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}