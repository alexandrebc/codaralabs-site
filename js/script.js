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

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  note.style.color = 'var(--accent-emerald)';
  note.textContent = 'Enviando...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      note.textContent = 'Mensagem enviada! Entraremos em contato em breve.';
      form.reset();
    } else {
      throw new Error('Falha no envio');
    }
  } catch (err) {
    note.style.color = '#f87171';
    note.textContent = 'Não foi possível enviar agora. Tente pelo e-mail ou WhatsApp ao lado.';
  } finally {
    submitBtn.disabled = false;
  }
});
