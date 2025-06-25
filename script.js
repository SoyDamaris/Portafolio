// Animación simple para la galería de portafolio (puedes personalizar más)
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('portfolio-gallery');
  // Ejemplo de proyectos (puedes reemplazar por tus propios proyectos)
  const projects = [
    { title: 'Landing Page Pastel', img: 'proyecto1.png', link: '#' },
    { title: 'E-commerce Femenino', img: 'proyecto2.png', link: '#' },
    { title: 'Blog Creativo', img: 'proyecto3.png', link: '#' }
  ];
  projects.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card shadow-sm h-100">
        <img src="${proj.img}" class="card-img-top" alt="${proj.title}">
        <div class="card-body">
          <h5 class="card-title">${proj.title}</h5>
          <a href="${proj.link}" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `;
    gallery.appendChild(col);
  });

  // Manejo del formulario de contacto
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.');
    form.reset();
  });
}); 