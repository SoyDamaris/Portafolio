// JS para el header (puedes agregar animaciones o lógica de navegación aquí)
// Por ejemplo, animar las estrellas decorativas:

// Animación de entrada para el header profesional y tecnológico
// Puedes agregar más animaciones o lógica aquí

document.addEventListener('DOMContentLoaded', function() {
  // Animar el título principal
  const title = document.querySelector('.custom-header h1');
  if (title) {
    title.animate([
      { opacity: 0, transform: 'translateY(-40px) scale(0.95)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' }
    ], {
      duration: 900,
      fill: 'forwards',
      easing: 'cubic-bezier(.5,1.5,.5,1)'
    });
  }
  // Animar el subtítulo
  const lead = document.querySelector('.custom-header .lead');
  if (lead) {
    lead.animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 900,
      delay: 300,
      fill: 'forwards',
      easing: 'cubic-bezier(.5,1.5,.5,1)'
    });
  }
  // Animar el menú de navegación
  const nav = document.querySelector('.custom-header nav');
  if (nav) {
    nav.animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 900,
      delay: 600,
      fill: 'forwards',
      easing: 'cubic-bezier(.5,1.5,.5,1)'
    });
  }
  // Animar los iconos sociales
  const socials = document.querySelectorAll('.header-social a');
  socials.forEach((el, i) => {
    el.animate([
      { opacity: 0, transform: 'scale(0.7)' },
      { opacity: 1, transform: 'scale(1)' }
    ], {
      duration: 700,
      delay: 900 + i * 120,
      fill: 'forwards',
      easing: 'cubic-bezier(.5,1.5,.5,1)'
    });
  });
}); 