document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const nextField = document.getElementById('next-field');
if (nextField) {
  nextField.value = `${window.location.origin}${window.location.pathname}?enviado=1#contato`;
}

if (window.location.search.includes('enviado=1')) {
  const form = document.getElementById('contact-form');
  const note = document.createElement('p');
  note.className = 'form-note';
  note.style.color = 'var(--accent-emerald)';
  note.textContent = 'Mensagem enviada! Entraremos em contato em breve.';
  form.after(note);
}
