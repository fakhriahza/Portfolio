// Menu toggle
document.addEventListener("DOMContentLoaded", function () {
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
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      toggleIcon.classList.replace("bx-x", "bx-menu");
    });
  });
});

// Scroll animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100; // seberapa jauh sebelum terlihat

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// Typed text animation
const typingElement = document.querySelector(".typing");
const words = [
  { text: "Frontend Developer", class: "frontend" },
  { text: "Creative Designer", class: "designer" },
  { text: "Lifelong Learner", class: "learner" },
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  typingElement.className = "typing " + current.class;

  if (isDeleting) {
    typingElement.textContent = current.text.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
      return;
    }
  } else {
    typingElement.textContent = current.text.substring(0, charIndex++);
    if (charIndex > current.text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

// ================================
// Auto-scroll bolak balik SKILLS
// ================================
document.addEventListener("DOMContentLoaded", function () {
  const skillsGrid = document.querySelector(".skills-grid");
  if (!skillsGrid) return;

  let scrollAmount = 0;
  let scrollDirection = 1;
  let autoScrollInterval;
  let isPaused = false;
  let resumeTimeout;

  function startAutoScroll() {
    const isMobile = window.innerWidth <= 768;
    const scrollStep = isMobile ? 0.5 : 1; // lebih lambat di mobile

    autoScrollInterval = setInterval(() => {
      if (isPaused) return;

      skillsGrid.scrollLeft += scrollStep * scrollDirection;
      scrollAmount += scrollStep;

      if (
        skillsGrid.scrollLeft + skillsGrid.clientWidth >=
        skillsGrid.scrollWidth
      ) {
        scrollDirection = -1;
      } else if (skillsGrid.scrollLeft <= 0) {
        scrollDirection = 1;
      }
    }, 20);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Pause saat user swipe di mobile
  skillsGrid.addEventListener("touchstart", () => {
    isPaused = true;
    stopAutoScroll();
    clearTimeout(resumeTimeout);
  });

  // Resume setelah 3 detik user tidak interaksi
  skillsGrid.addEventListener("touchend", () => {
    resumeTimeout = setTimeout(() => {
      isPaused = false;
      startAutoScroll();
    }, 3000);
  });

  startAutoScroll();
});
