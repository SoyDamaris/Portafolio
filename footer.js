// JS para el footer (puedes agregar animaciones decorativas aquí)

// Animación de entrada para el footer profesional y tecnológico
// Puedes agregar más animaciones o lógica aquí

document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.custom-footer .star');
  stars.forEach((star, i) => {
    star.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' }
    ], {
      duration: 2000 + i * 500,
      iterations: Infinity
    });
  });

  // Animar el texto de copyright o frase personal
  const copyright = document.querySelector('.custom-footer p');
  if (copyright) {
    copyright.animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 900,
      fill: 'forwards',
      easing: 'cubic-bezier(.5,1.5,.5,1)'
    });
  }
  // Animar los iconos sociales
  const socials = document.querySelectorAll('.custom-footer .social-links a');
  socials.forEach((el, i) => {
    el.animate([
      { opacity: 0, transform: 'scale(0.7)' },
      { opacity: 1, transform: 'scale(1)' }
    ], {
      duration: 700,
      delay: 400 + i * 120,
      fill: 'forwards',
      easing: 'cubic-bezier(.5,1.5,.5,1)'
    });
  });
}); 