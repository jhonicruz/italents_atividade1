let tasks = [];

function removeItem(index) {
  tasks.splice(index, 1);
  showTasks();
}

function showTasks() {
  const ulRoot = document.querySelector('.todolist__tasks');
  ulRoot.innerHTML = '';
  tasks.forEach((task, index) => {
    ulRoot.innerHTML += `
          <li>
            <div class="task-control">
              <input type="checkbox" value="${task.name}" name="tasks" id="${index}" />
              <label for="${index}"> ${task.name} </label>
            </div>
            <button type="button" class="btn-removeTask" onclick="removeItem(${index})">
              <img src="src/assets/images/trash.svg" alt="remove task" />
            </button>
          </li>
          <hr />
    `;
  });
}

function initTodoList() {
  const addInput = document.querySelector('.todolist__input');
  const addForm = document.getElementById('todolist__form');
  const error = document.querySelector('.error');

  const errorTypes = {
    fieldEmpty: 'Preencha uma Tarefa.',
    existTask: 'Essa Tarefa já existe. ',
  };

  addForm.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const task = addInput.value;

    // Verificar se o input está vazio

    if (task === '') {
      error.classList.remove('hidden');
      error.innerText = errorTypes.fieldEmpty;
      addInput.focus();
    } else if (validateExistTask(task)) {
      error.classList.remove('hidden');
      error.innerText = errorTypes.existTask;
      addInput.focus();
    } else {
      // Se não tiver vazio adiciona uma tarefa
      createTask(task);
      error.classList.add('hidden');
      clearInput();
      addInput.focus();
    }
  }

  function validateExistTask(task) {
    const exists = tasks.find((x) => x.name === task);
    return exists ? true : false;
  }

  function clearInput() {
    addInput.value = '';
  }

  function createTask(task) {
    tasks.push({
      name: task,
    });
    clearInput();
    showTasks();
  }

  // function showTasks() {
  //   ulRoot.innerHTML = '';
  //   tasks.forEach((task, index) => {
  //     ulRoot.innerHTML += `
  //           <li>
  //             <div class="task-control">
  //               <input type="checkbox" value="${task.name}" name="tasks" id="${index}" />
  //               <label for="${index}"> ${task.name} </label>
  //             </div>
  //             <button type="button" class="btn-removeTask" onclick="removeItem(${index})">
  //               <img src="src/assets/images/trash.svg" alt="remove task" />
  //             </button>
  //           </li>
  //           <hr />
  //     `;
  //   });
  // }
}

initTodoList();
