const addInput = document.querySelector('.todolist__input');
const addForm = document.getElementById('todolist__form');
const ulRoot = document.querySelector('.todolist__tasks');
const ulRootCompleted = document.querySelector('.todolist__tasks.completed');

const error = document.querySelector('[data-error="todolist"]');

let tasks = [];

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
    console.log('Ja existe');
  } else {
    // Se não tiver vazio ou não existe adiciona uma tarefa
    createTask(task);
    error.classList.add('hidden');
    clearInput();
    addInput.focus();
    console.log('ok');
  }
}

function validateExistTask(task) {
  const exists = tasks.find((x) => x.name === task);
  return exists ? true : false;
}

function showTasks() {
  const ulRoot = document.querySelector('.todolist__tasks');
  ulRoot.innerHTML = '';
  tasks.forEach((task, index) => {
    ulRoot.innerHTML += `
          <li>
            <div class="task-control">
              <input type="checkbox" value="${task.name}" name="tasks" id="${index}" onclick="completeTask('${task.name}','${index}')"/>
              <label for="${index}"> ${task.name} </label>
            </div>
            <button type="button" class="btn-removeTask" onclick="removeItem('${index}')">
              <img src="src/assets/images/trash.svg" alt="remove task" />
            </button>
          </li>
          <hr />
    `;
  });
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

function removeItem(index) {
  tasks.splice(index, 1);
  showTasks();
}

function completeTask(task, index) {
  removeItem(index);
  ulRootCompleted.innerHTML += `
    <li class="completed-task"> 
      <div class="task-control">
        <input type="checkbox" value="${task}" name="TaskCompleted" id="${index}" checked />
        <label for="${index}">${task}</label>
      </div>
    </li>
    <hr />

  `;
}
