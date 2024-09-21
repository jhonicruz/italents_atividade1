export default function initCalc() {
  const result = document.querySelector('.calc-result');
  const btnNumbers = document.querySelectorAll('.btnNumbers');
  const btnClear = document.querySelector('.btnClear');
  const btnOperators = document.querySelectorAll('.operators');
  const back = document.querySelector('.back');
  const btnEqual = document.querySelector('#equal');

  btnOperators.forEach((btn) => {
    console.log(btn.innerHTML);
  });

  function insert({ target }) {
    const number = target.innerHTML;
    result.innerHTML += number;
  }

  function clean() {
    result.innerHTML = '';
  }

  function calculate() {
    const expression = result.innerHTML.replace(/x/g, '*');
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
