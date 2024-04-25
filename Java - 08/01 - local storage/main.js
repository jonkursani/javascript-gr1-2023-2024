const inpTodo = document.getElementById('inp-todo');
const btnSave = document.getElementById('btn-save');
const ulTodo = document.getElementById('todo-list');
const inpFilter = document.getElementById('inp-filter');
const btnClear = document.getElementById('btn-clear');

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
  doneButton.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const deleteButton = createButton('Delete', 'btn btn-outline-danger ms-1');
  deleteButton.addEventListener('click', () => {
    ulTodo.removeChild(li); // remove prej DOM
    // li.remove();
    // li.firstChild.textContent pe marrim textin e elementit
    removeFromStorage(li.firstChild.textContent); // remove from storage
  });

  span.append(doneButton, deleteButton);
  li.append(span);

  return li;
}

function addToDom(item) {
  const li = createLi(item, 'list-group-item d-flex justify-content-between');
  ulTodo.append(li);
}

function checkIfItemExists(item) {
  const todosFromStorage = getFromStorage();
  if (todosFromStorage.includes(item)) {
    return true;
  } else {
    return false;
  }
}

function addTodo() {
  const inpTodoValue = inpTodo.value.trim();

  if (!inpTodoValue) {
    alert('Shkruaj nje todo');
    return;
  }

  if (checkIfItemExists(inpTodoValue)) {
    alert('Kjo todo ekziston');
    return;
  }

  // const li = createLi(item, 'list-group-item d-flex justify-content-between');
  // ulTodo.append(li);
  // dy rreshtat zevendesohen me metoden addToDom
  addToDom(inpTodoValue);
  addToStorage(inpTodoValue);

  inpTodo.value = '';
}

function filterTodos() {
  const listItems = document.querySelectorAll('li');
  const textToSearch = inpFilter.value.trim().toLowerCase();

  listItems.forEach((item) => {
    const itemText = item.firstChild.textContent;
    if (itemText.includes(textToSearch)) {
      item.classList.remove('d-none');
    } else {
      item.classList.add('d-none');
    }
  });
}

function clearAll() {
  // ulTodo.innerHTML = '';

  while (ulTodo.firstChild) {
    ulTodo.removeChild(ulTodo.firstChild);
  }

  localStorage.removeItem('todos');
}

function getFromStorage() {
  let todosFromStorage;

  // localStorage.getItem('todos') === null
  if (!localStorage.getItem('todos')) {
    // nese ska items
    todosFromStorage = [];
  } else {
    // nese ka items
    // itemat ne local storage ruhen si string
    todosFromStorage = JSON.parse(localStorage.getItem('todos'));
  }

  return todosFromStorage;
}

function addToStorage(item) {
  // get items prej local storage dhe ruaji ne array
  const todosFromStorage = getFromStorage();
  // push items ne array
  todosFromStorage.push(item);
  // JSON.parse(['a','b']) // "['a','b']"
  localStorage.setItem('todos', JSON.stringify(todosFromStorage));
}

function displayItems() {
  // merr items prej local storage edhe i run ne array
  const todosFromStorage = getFromStorage();
  // todosFromStorage.forEach((item) => {
  //   return addToDom(item);
  // });
  // todosFromStorage.forEach(function(item) {
  //   return addToDom(item)
  // })
  // itero arrayin e krijum edhe bon append itemat ne liste
  todosFromStorage.forEach((item) => addToDom(item));
}

function removeFromStorage(itemText) {
  console.log(itemText);
  // ['a','b','c']
  let todosFromStorage = getFromStorage();

  // ['b', 'c']
  // set ne local storage
  // filter e kthen ni array te ri qet array e bojm assign ne array-in aktual qe e kemi
  todosFromStorage = todosFromStorage.filter((todo) => todo !== itemText);
  // console.log(todosFromStorage);
  localStorage.setItem('todos', JSON.stringify(todosFromStorage));
}

// event listeners
btnSave.addEventListener('click', addTodo);
inpTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
inpFilter.addEventListener('input', filterTodos);
btnClear.addEventListener('click', clearAll);
document.addEventListener('DOMContentLoaded', displayItems);

// localStorage.setItem('name', 'Enis');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();
