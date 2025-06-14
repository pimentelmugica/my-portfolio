/* toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* scroll sections active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if ((top >= offset) & (top < offset + height)) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /* sticky navbar */

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.screenY > 100);

  /* remove toggle icon and navbar when click navbar link (scroll) */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* sroll reveal */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .experience-container, .experience-box, .contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  /* typed js */
  const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Quality Enthusiast'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
  });

/* cv download */
let downloadCv = document.querySelector('#download');
downloadCv.onclick = () => {
  window.open('docs/cv.pdf');
};

/* visit media */
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');

linkedin.onclick = () => {
  window.open('https://www.linkedin.com/in/javier-pimentel-mugica/');
};

github.onclick = () => {
  window.open('https://github.com/pimentelmugica');
};
