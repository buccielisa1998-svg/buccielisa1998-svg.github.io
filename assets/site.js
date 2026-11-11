// Customize these URLs after Elisa creates her online profiles.
// Keep blank until you have the real URL: empty links are automatically hidden.
window.ELISA_SITE = {
  linkedinUrl: '',
  githubUrl: ''
};

document.querySelectorAll('[data-current-year]').forEach(el => {el.textContent = new Date().getFullYear()});
Object.entries({linkedin: window.ELISA_SITE.linkedinUrl, github:window.ELISA_SITE.githubUrl}).forEach(([key,url]) => {
  if (!url || !/^https:\/\//i.test(url)) return;
  document.querySelectorAll(`[data-link="${key}"]`).forEach(el => { el.href=url; el.hidden=false; });
});
const nav = document.querySelector('#site-nav');
const toggle = document.querySelector('.menu-toggle');
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false') }
  });
}
