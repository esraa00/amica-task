var navElementsWrapper = document.querySelector('.navbar-elements-wrapper');
var navbarIcon = document.querySelector('.nav-icon');

function toggleNavbar() {
  navbarIcon = document.querySelector('.nav-icon');
  if (!navbarIcon.classList.contains('active')) {
    navbarIcon.classList.add('active');
  } else {
    navbarIcon.classList.remove('active');
  }
}
navbarIcon.addEventListener('click', toggleNavbar);

let currentScreenSize = window.matchMedia('(min-width: 767px)');
currentScreenSize.addEventListener('change', closeNavbarIfOpenInLargeScreen);
function closeNavbarIfOpenInLargeScreen() {
  if (currentScreenSize.matches) {
    navbarIcon.classList.remove('active');
  }
}
