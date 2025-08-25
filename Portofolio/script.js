// Menu toogle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const toggleIcon = menuToggle.querySelector("i");
    const navLinks = navbar.querySelectorAll("a");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        // ganti ikon
        if (navbar.classList.contains("active")) {
            toggleIcon.classList.replace("bx-menu", "bx-x");
        } else {
            toggleIcon.classList.replace("bx-x", "bx-menu");
        }
    });

    // auto-close saat klik menu di mobile
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            toggleIcon.classList.replace("bx-x", "bx-menu");
        });
    });
});

// Scroll animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100; // seberapa jauh sebelum terlihat

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
