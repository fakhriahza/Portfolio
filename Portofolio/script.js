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