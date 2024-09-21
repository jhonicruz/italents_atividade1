export default function initCalc() {
  const result = document.querySelector('[data-result]');
  const btnNumbers = document.querySelectorAll('[data-numbers]');
  const btnClear = document.querySelector('[data-clear]');
  const btnOperators = document.querySelectorAll('[data-operators]');
  const back = document.querySelector('[data-back]');
  const btnEqual = document.querySelector('[data-equal]');

  function insert({ target }) {
    const number = target.innerHTML;
    result.innerHTML += number;
  }

  function clean() {
    result.innerHTML = '';
  }

  function calculate() {
    const expression = result.innerHTML.replace(/x/g, '*');
    if (result.innerHTML.length === 0) return;
    console.log(typeof result.innerHTML);
    result.innerHTML = eval(expression);
  }

  back.addEventListener('click', () => {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
  });

  btnClear.addEventListener('click', clean);
  btnNumbers.forEach((btn) => {
    btn.addEventListener('click', insert);
  });
  btnOperators.forEach((btnOperator) => {
    btnOperator.addEventListener('click', insert);
  });
  btnEqual.addEventListener('click', calculate);
}
