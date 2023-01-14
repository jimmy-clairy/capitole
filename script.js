const hamburgerButton = document.querySelector(".header__btn-toggle")
const navigation = document.querySelector(".header__nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}