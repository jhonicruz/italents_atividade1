export default function initCalc() {
  const result = document.querySelector('.bc__result');
  const btnNumbers = document.querySelectorAll('.btnNumbers');
  const btnClear = document.querySelector('.btnClear');
  const btnOperators = document.querySelectorAll('.operators');
  const back = document.querySelector('.back');
  const btnEqual = document.querySelector('#equal');

  function insert({ target }) {
    const number = target.innerText;
    result.innerHTML += number;
  }

  function clean() {
    result.innerHTML = '';
  }

  function calculate() {
    result.innerHTML = eval(result.innerHTML);
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
