// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Mobile Menu
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Scroll Navbar Effect
const navbar = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
  } else {
    navbar.style.background = 'rgba(10, 25, 47, 0.85)';
    navbar.style.boxShadow = 'none';
  }
});
