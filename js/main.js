
/* MENU NAVBAR */
const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');
  menuIcon.style.display = isOpen ? 'none' : 'inline';
  closeIcon.style.display = isOpen ? 'inline' : 'none';
});

const links = menu.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  });
});
