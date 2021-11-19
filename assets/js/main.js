/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

const checkbox = document.getElementById('chk');
if (checkbox) {
    checkbox.addEventListener('click', ({
        target
    }) => {
        if (target.checked) {
            document.body.classList.toggle('dark');
        }
    });
}