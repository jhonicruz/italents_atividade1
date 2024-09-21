export default function initImc() {
  const formImc = document.querySelector('[data-form]');

  const inputAltura = document.querySelector('#altura');
  const inputPeso = document.querySelector('#peso');
  const error = document.querySelector('.error');
  const resultRoot = document.querySelector('.resultado');

  const errorsTypes = {
    heightEmpty: 'Por favor, digite um valor para o Altura',
    heightRegex: 'A altura deve conter um valor válido',
    weigthEmpty: 'Por favor, digite um valor para o Peso',
    allEmpty: 'Por favor, preencha os valores de Altura e Peso',
    numberLimit: 'Digite apenas 2 números para representar os centímetros',
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { value: altura } = inputAltura;
    const { value: peso } = inputPeso;
    if (validateValues(altura, peso)) calculateImc(altura, peso);
  }

  function validateValues(altura, peso) {
    const novaAltura = altura.replace(',', '.').trim();

    // Regex para validar a altura no formato correto
    const alturaRegex = /^([0-2](?:\.\d{1,2})?)$/;

    if (novaAltura === '' && peso === '') {
      error.innerHTML = errorsTypes.allEmpty;
      error.classList.remove('hidden');
      return false;
    } else if (novaAltura === '') {
      error.innerHTML = errorsTypes.heightEmpty;
      error.classList.remove('hidden');
      return false;
    } else if (peso === '') {
      error.innerHTML = errorsTypes.weigthEmpty;
      error.classList.remove('hidden');
      return false;
    } else if (!alturaRegex.test(novaAltura)) {
      error.innerHTML = errorsTypes.heightRegex;
      error.classList.remove('hidden');
      return false;
    } else {
      error.classList.add('hidden');
      return true;
    }
  }

  function calculateImc(altura, peso) {
    const result = Number(peso) / Number(altura.replace(',', '.')) ** 2;
    showResult(result);
  }

  function showResult(result) {
    if (result > 40) {
      resultRoot.innerHTML = `
          <p style="font-weight: bold;font-size:2rem">Resultado</p>
          <p>Obesidade Grau III</p>
          </div>
      `;
    } else if (result >= 35 && result < 40) {
      resultRoot.innerHTML = `
      <p style="font-weight: bold;font-size:2rem">Resultado</p>
        <p>Obesidade Grau II</p>
      </div>
  `;
    } else if (result >= 25 && result < 30) {
      resultRoot.innerHTML = `
      <p style="font-weight: bold;font-size:2rem">Resultado</p>
        <p>Sobrepeso</p>
      </div>
  `;
    } else if (result >= 18.5 && result < 25) {
      resultRoot.innerHTML = `
      <p style="font-weight: bold;font-size:2rem">Resultado</p>
        <p>Sobrepeso</p>
      </div>
  `;
    } else {
      resultRoot.innerHTML = `
      <p style="font-weight: bold;font-size:2rem">Resultado</p>
        <p>Magreza</p>
      </div>
  `;
    }
  }

  formImc.addEventListener('submit', handleSubmit);
}
