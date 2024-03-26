const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if(this.scrollY > 1) {
        navbar.classList.add("navbar__light")
    } else {
        navbar.classList.remove("navbar__light")
    }
})