import './style.css'

// Simple animation observer to reveal elements on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Select all project cards and headings for animation
  const animatableElements = document.querySelectorAll('section h2, section p, .group');

  animatableElements.forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(el);
  });
});

console.log('Portfolio initialized with ❤️');
