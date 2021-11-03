/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== CLOSE ON CLICK ====================*/

const navLink = document.querySelectorAll('.nav__item');

navLink.forEach((link) => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show-menu')
    })
})


/*==================== SHOW SCROLL TOP BUTTON ====================*/

window.addEventListener('scroll', function() {
    const scrBtn = document.querySelector('.scroll__button');
    
    const scroll = window.scrollY;

    if(scroll > 500) {
        scrBtn.classList.remove('display-btn')
    } else {
        scrBtn.classList.add('display-btn')
    }    
})

/*==================== SCROLL TO TOP ====================*/

const scrollBtn = document.getElementById('scroll-button');

scrollBtn.addEventListener('click', function() {
    window.scrollTo(0,0)
})