window.addEventListener("scroll", function(){
var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
})





const navmenu = document.querySelector ('.nav-menu')

const hambutton = document.querySelector ('.hamburger-button')

hambutton.addEventListener ('click', () => {
    navmenu.classList.toggle('change')
})



let menuOpen = false;
hambutton.addEventListener ('click', () => {
    if (!menuOpen) {
        hambutton.classList.add ('open');
        menuOpen = true;
    } else {
        hambutton.classList.remove('open');
        menuOpen = false;
    }
});

window.addEventListener('load', () => {
    const preloader = document.querySelector ('.load')
    preloader.classList.add('preload-finish')
})