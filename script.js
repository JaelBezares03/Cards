document.addEventListener('DOMContentLoaded', function () {
  const fondos = document.querySelectorAll('.fondo');
  fondos[0].classList.add('active');

  fondos.forEach(fondo => {
    fondo.addEventListener('click', function () {
      fondos.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
