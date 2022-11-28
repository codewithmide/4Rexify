let navLinks = document.querySelector('.mobile-nav-links');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

menu.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  menu.style.display = 'none';
  close.style.display = 'flex';
})

close.addEventListener('click', () => {
  navLinks.style.display = 'none';
  menu.style.display = 'flex';
  close.style.display = 'none';
})