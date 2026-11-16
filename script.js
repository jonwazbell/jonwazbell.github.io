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


// Photo gallery: give wider photos more room
document.querySelectorAll('.gallery img').forEach(img => {
  const fit = () => {
    if (!img.naturalWidth) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    img.style.aspectRatio = ratio;
    img.closest('figure').style.setProperty('--r', ratio);
  };
  if (img.complete) fit(); else img.addEventListener('load', fit);
});