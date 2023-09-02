const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
  evento.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');

  if (value !== "") { // Verifica si el valor no está vacío
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  }
};

btn.addEventListener('click', createTask);


const checkComplete = () => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleCheckIcon);
  return checkbox;
};

const toggleCheckIcon = (event) => {
  const checkbox = event.target;
  const listItem = checkbox.parentNode;
  const titleTask = listItem.querySelector('.task');

  if (checkbox.checked) {
    titleTask.classList.add('line-through');
    listItem.classList.add('completed');
  } else {
    titleTask.classList.remove('line-through');
    listItem.classList.remove('completed');
  }
};


const deleteIcon = () => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', deleteTask);
  return i;
};

const deleteTask = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
};



