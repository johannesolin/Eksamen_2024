const navLinks = document.querySelector('.nav-links');

function openMenu() {
    navLinks.classList.add('active');
    document.querySelector('.hamburger').classList.add('active');
    document.querySelector('.close-btn').classList.add('active');
}

function closeMenu() {
    navLinks.classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.close-btn').classList.remove('active');

}