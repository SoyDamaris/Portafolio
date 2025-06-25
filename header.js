// JS para el header (puedes agregar animaciones o lógica de navegación aquí)
// Por ejemplo, animar las estrellas decorativas:
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.custom-header .star');
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
}); 