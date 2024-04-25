// setTimeout(funksioni, milisekonda);
// setTimeout(changeText, 3000);
const timeoutId = setTimeout(changeText, 3000);

function changeText() {
  document.getElementById('heading').textContent = 'Text changed after 3 seconds';
}

function cancelTimeout() {
  console.log('Cancel', timeoutId);
  clearTimeout(timeoutId);
}

document.getElementById('btn-cancel').addEventListener('click', cancelTimeout);

let intervalId;
function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 2000);
  }
}

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopInterval() {
  clearInterval(intervalId);
}

document.getElementById('start').addEventListener('click', startInterval);
document.getElementById('stop').addEventListener('click', stopInterval);

const inpSearch = document.getElementById('inp-search');
function delayedSearch() {
  //   setTimeout(search, 3000);
  setTimeout(() => {
    document.getElementById('res').textContent = inpSearch.value;
  }, 3000);
}

function search() {
  document.getElementById('res').textContent = inpSearch.value;
}

inpSearch.addEventListener('input', delayedSearch);
