// Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("shadow", window.scrollY > 50);
});
