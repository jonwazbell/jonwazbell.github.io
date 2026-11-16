// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


// Photo gallery: give wider photos a bit more room.
// STRENGTH: 0 = all photos the same width, 1 = width follows the photo's shape exactly.
const STRENGTH = 0.5;
document.querySelectorAll('.gallery img').forEach(img => {
  const fit = () => {
    if (!img.naturalWidth) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    const shown = 1 + (ratio - 1) * STRENGTH;
    img.style.aspectRatio = shown;
    img.closest('figure').style.setProperty('--r', shown);
  };
  if (img.complete) fit(); else img.addEventListener('load', fit);
});