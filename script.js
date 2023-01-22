const hamburgerButton = document.querySelector(".header__btn-toggle")
const navigation = document.querySelector(".header__nav")
const navLink = document.querySelectorAll(".header__nav__link")

hamburgerButton.addEventListener("click", toggleNav)
navLink.forEach(a => a.addEventListener("click", toggleNav))

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}