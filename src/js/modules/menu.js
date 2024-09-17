export default function initMenu() {
  const btnMenu = document.getElementById('btn-mobile');

  function handleClick(e) {
    e.preventDefault();
    const nameClass = 'active';
    const hasActive = this.classList.toggle(nameClass);
    if (hasActive) {
      this.setAttribute('aria-expanded', hasActive);
      this.setAttribute('aria-label', 'Fechar Menu');
      this.nextElementSibling.classList.add(nameClass);
      this.parentElement.classList.add(nameClass);
    } else {
      this.setAttribute('aria-expanded', hasActive);
      this.setAttribute('aria-label', 'Abrir Menu');
      this.nextElementSibling.classList.remove(nameClass);
      this.parentElement.classList.remove(nameClass);
    }
  }

  btnMenu.addEventListener('click', handleClick);
}
