const habLi = document.querySelectorAll('.js-lista-hab li');
const habInfo = document.querySelectorAll('.js-info-hab section');

function activeTab(index) {
  habInfo.forEach((section) => {
    section.classList.remove('ativo');
  });
  habInfo[index].classList.add('ativo');
}

habLi.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

const sections = document.querySelectorAll('.js-scroll');
const Metade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - Metade;
    if (sectionTop < 0) {
      section.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', animaScroll);
