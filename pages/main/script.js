const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const hamburgerLine = document.querySelector('.hamburger-line');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const body = document.querySelector('.body');
const logo = document.querySelector('.logo');
const logoHam = document.querySelector('.logo-ham');
const screen = document.querySelector('.screen');

(function () {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        line1.classList.toggle('line1-transf');
        line2.classList.toggle('line2-transf');
        line3.classList.toggle('line3-transf');
        hamburger.classList.toggle('hamburger-open');
        body.classList.toggle('body-lock');
        logo.classList.toggle('logo-open');
        logoHam.classList.toggle('logo-ham-open');
        screen.classList.toggle('screen-active');
    })
    screen.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        line1.classList.remove('line1-transf');
        line2.classList.remove('line2-transf');
        line3.classList.remove('line3-transf');
        hamburger.classList.remove('hamburger-open');
        body.classList.remove('body-lock');
        logo.classList.remove('logo-open');
        logoHam.classList.remove('logo-ham-open');
        screen.classList.remove('screen-active');
    })
}())

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        nav.classList.remove('nav-open');
        line1.classList.remove('line1-transf');
        line2.classList.remove('line2-transf');
        line3.classList.remove('line3-transf');
        hamburger.classList.remove('hamburger-open');
        body.classList.remove('body-lock');
        logo.classList.remove('logo-open');
        logoHam.classList.remove('logo-ham-open');
        screen.classList.remove('screen-active');
    }
}