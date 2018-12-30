// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  checkTop()
}

// Get the home section
var home = document.getElementById('home')

// Get the Navbar
var navbar = document.querySelector('.Navbar')

// Get the Navbar__Items all
var navbar_items_all = document.querySelectorAll('.Navbar__Items')

// Get the Navbar__Items
var navbar_items = document.querySelector('.Navbar__Items')

// Get the offset position of the navbar
var homeTop = home.offsetTop

function Toggle_displayCheck() {
  if (navbar_items.classList.contains('Navbar__ToggleShow')) {
    return true
  } else {
    return false
  }
}

function checkTop() {
  if (window.pageYOffset <= homeTop && !Toggle_displayCheck()) {
    navbar.classList.remove('header-display')
  } else {
    navbar.classList.add('header-display')
  }
}

function classToggle() {
  navbar_items_all.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'))
}

function Toggle_displayNav() {
  if (window.pageYOffset <= homeTop) {
    navbar.classList.toggle('header-display')
  } else {
    navbar.classList.add('header-display')
  }
}

function Remove_displayNav() {
  document
    .querySelector('.Navbar__Items')
    .classList.remove('Navbar__ToggleShow')
}

document.querySelectorAll('.js-links').forEach(function(elem) {
  elem.addEventListener('click', Remove_displayNav)
})

document
  .querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle)
document
  .querySelector('.Navbar__Link-toggle')
  .addEventListener('click', Toggle_displayNav)
