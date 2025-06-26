// Animación simple para la galería de portafolio (puedes personalizar más)
document.addEventListener('DOMContentLoaded', function() {
  // Manejo del formulario de contacto
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.');
    form.reset();
  });
}); 