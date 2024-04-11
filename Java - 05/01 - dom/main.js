const elInpStudents = document.querySelector('#inp-students');
const btnSave = document.querySelector('#btn-save');
const elUlRes = document.querySelector('.ul-res');

function addStudent() {
  const inpStudentsValue = elInpStudents.value.trim();

  if (!inpStudentsValue) {
    alert('Shkruani emrat e studenteve');
    return;
  }

  // me filter i largojme vlerat empty, filtroj vetem ato qe kane vlera
  const students = inpStudentsValue.split(',').filter((student) => student);

  for (const student of students) {
    const li = document.createElement('li');
    li.textContent = student;
    elUlRes.append(li);
  }

  elInpStudents.value = '';
}

btnSave.addEventListener('click', addStudent);
elInpStudents.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addStudent();
  }
});
