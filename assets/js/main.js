document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (!button || !nav) return;
  button.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
