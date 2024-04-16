const inpTodo = document.getElementById('inp-todo');
const btnSave = document.getElementById('btn-save');
const ulTodo = document.getElementById('todo-list');

function createButton(text, classes) {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = classes;
  return button;
}

function createLi(text, classes) {
  // <li></li>
  const li = document.createElement('li');
  // <li>text</li>
  li.textContent = text;
  // <li class='classes'>text</li>
  li.className = classes;
  //   li.classList.add(classes);

  const span = document.createElement('span');
  const doneButton = createButton('Done', 'btn btn-outline-success');
  const deleteButton = createButton('Delete', 'btn btn-outline-danger ms-1');
  span.append(doneButton, deleteButton);
  li.append(span);

  return li;
}

function addTodo() {
  const inpTodoValue = inpTodo.value.trim();

  if (!inpTodoValue) {
    alert('Shkruaj nje todo');
    return;
  }

  const li = createLi(inpTodoValue, 'list-group-item d-flex justify-content-between');
  ulTodo.append(li);

  inpTodo.value = '';
}

btnSave.addEventListener('click', addTodo);
inpTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
