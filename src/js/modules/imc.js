export default function initImc() {
  const formImc = document.querySelector('[data-form]');
  const inputAltura = document.getElementById('altura');
  const inputPeso = document.getElementById('peso');
  const error = document.querySelector('[data-error="imc"]');
  const resultRoot = document.querySelector('.resultado');

  const errorsTypes = {
    heightEmpty: 'Por favor, digite um valor para o Altura',
    heightInvalid: 'A altura deve conter um valor válido',
    weigthEmpty: 'Por favor, digite um valor para o Peso',
    weightInvalid: 'O peso deve conter apenas números',
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
    const novoPeso = peso.trim();

    // Regex para validar a altura no formato correto
    const alturaRegex = /^([0-2](?:\.\d{1,2})?)$/;
    // Regex para validar que o peso contém apenas números
    const pesoRegex = /^\d+$/;

    if (novaAltura === '' && novoPeso === '') {
      error.innerHTML = errorsTypes.allEmpty;
      error.classList.remove('hidden');
      resultRoot.innerHTML = '';
      return false;
    } else if (novaAltura === '') {
      return false;
    } else if (novoPeso === '') {
      setError(errorsTypes.weigthEmpty);
      return false;
    } else if (!alturaRegex.test(novaAltura)) {
      setError(errorsTypes.heightInvalid);
      return false;
    } else if (!pesoRegex.test(novoPeso)) {
      setError(errorsTypes.weightInvalid);
      return false;
    } else {
      error.classList.add('hidden');
      return true;
    }
  }

  function setError(error) {
    error.innerHTML = error;
    error.classList.remove('hidden');
    resultRoot.innerHTML = '';
  }

  function calculateImc(altura, peso) {
    const result = Number(peso) / Number(altura.replace(',', '.')) ** 2;
    showResult(result);
  }

  function showResult(result) {
    resultRoot.innerHTML = '';

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
