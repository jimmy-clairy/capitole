const hamburgerButton = document.querySelector(".header__btn-toggle")
const navigation = document.querySelector(".header__nav")
const navLink = document.querySelectorAll(".header__nav__link")

hamburgerButton.addEventListener("click", toggleNav)
navLink.forEach(a => a.addEventListener("click", toggleNav))

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}

const ratio = .1
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {

        }
        console.log(entry.intersectionRatio);
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach((r) => {
    observer.observe(r)
})
