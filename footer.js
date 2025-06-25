// JS para el footer (puedes agregar animaciones decorativas aquí)
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
}); 