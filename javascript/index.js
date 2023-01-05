//typing text animation in landing section
const applicationSloganElement = document.getElementById('app-slogan');
const applicationSlogan = ['Inhale peace, exhale happiness.'];
let currentApplicationSlogan = [];

let i = 0;
function writeApplicationSlogan() {
  if (i < applicationSlogan[0].length) {
    currentApplicationSlogan.push(applicationSlogan[0][i]);
    applicationSloganElement.innerHTML = currentApplicationSlogan.join('');
    i++;
  } else if (i == applicationSlogan[0].length) {
    window.clearInterval(writeApplicationSlogan);
  }
}

setInterval(writeApplicationSlogan, 60);

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

let currentScreenSize = window.matchMedia('(min-width: 1200px)');
currentScreenSize.addEventListener('change', closeNavbarIfOpenInLargeScreen);
function closeNavbarIfOpenInLargeScreen() {
  if (currentScreenSize.matches) {
    navbarIcon.classList.remove('active');
  }
}
