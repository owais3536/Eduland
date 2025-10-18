'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navElementArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElementArr.length; i++) {
    
    navElementArr[i].addEventListener('click', () => {

        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    })
}

/**
 * header sticky functionality
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
    window.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
})


/**
 * go top
 */

const goToBtn = document.querySelector('[data-go-to-top]');

window.addEventListener('scroll', () => {

    window.scrollY >= 800 ? goToBtn.classList.add('active') : goToBtn.classList.remove('active');

})