// Menu toggle
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

// Typed text animation
// Typed text animation
const typingElement = document.querySelector(".typing");
const words = [
  { text: "Frontend Developer", class: "frontend" },
  { text: "UI/UX Designer", class: "designer" },
  { text: "Lifelong Learner", class: "learner" }
];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  if (wordIndex >= words.length) wordIndex = 0;
  const { text, class: wordClass } = words[wordIndex];

  // set warna class sesuai word
  typingElement.className = `typing ${wordClass}`;

  if (isDeleting) {
    typingElement.textContent = text.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex++;
      setTimeout(typeEffect, 500);
      return;
    }
  } else {
    typingElement.textContent = text.substring(0, charIndex++);
    if (charIndex > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

// Auto-scroll untuk skills section
document.addEventListener("DOMContentLoaded", function () {
  const skillsGrid = document.querySelector(".skills-grid");
  let scrollAmount = 2; // kecepatan scroll (px)
  let direction = 1; // 1 = kanan, -1 = kiri

  function autoScroll() {
    if (!skillsGrid) return;

    skillsGrid.scrollLeft += scrollAmount * direction;

    // kalau udah sampai ujung kanan -> balik ke kiri
    if (skillsGrid.scrollLeft + skillsGrid.clientWidth >= skillsGrid.scrollWidth) {
      direction = -1;
    }
    // kalau udah sampai ujung kiri -> balik ke kanan
    else if (skillsGrid.scrollLeft <= 0) {
      direction = 1;
    }
  }

  setInterval(autoScroll, 20); // jalanin tiap 20ms
});


