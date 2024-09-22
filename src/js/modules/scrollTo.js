export default function initScrollTo() {
  const linksInternos = document.querySelectorAll('[data-menu="scroll"] li a[href^="#"]');
  const sections = document.querySelectorAll('[data-menu="section"]');
  console.log(sections);

  function scrollToSection(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    const sectionTop = document.querySelector(id).getBoundingClientRect().top;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
