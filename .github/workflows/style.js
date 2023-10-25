function openLightbox(image) {
  
  // Add a smooth scroll effect to all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
  
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  // Add a contact form
const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Send the form data to your server here
});
// Add a responsive navigation bar
const navbar = document.querySelector('.navbar');

window.addEventListener('resize', function() {
  if (window.innerWidth < 768) {
    navbar.classList.add('collapsed');
  } else {
    navbar.classList.remove('collapsed');
  }
});

// Toggle the navigation bar on click
const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function() {
  navbar.classList.toggle('collapsed');
});
