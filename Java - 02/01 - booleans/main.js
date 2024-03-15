const btnCalc = document.querySelector('.btn-calc');
btnCalc.addEventListener('click', function () {
  // elementi
  const elFirstName = document.querySelector('.inp-first-name');
  // vlera
  const firstNameValue = elFirstName.value;
  const elLastName = document.querySelector('.inp-last-name');
  const lastNameValue = elLastName.value;
  const elPoints = document.querySelector('.inp-points');
  const pointsValue = elPoints.value;

  // '' edhe null - e llogarit si false
  if (!firstNameValue.trim() || !lastNameValue.trim() || !pointsValue) {
    alert('Fushat jane obligative.');
    return; // mos me vazhdu ekzekutimi i kodit
  }

  if (pointsValue < 0 || pointsValue > 100) {
    alert('Vlera e pikeve duhet te jete pozitive prej 0 - 100');
    return;
  }

  const elOutput = document.querySelector('.output');
  if (pointsValue >= 51 && pointsValue < 61) {
    elOutput.textContent = `Studenti: ${firstNameValue} ${lastNameValue} ka noten 6`;
  } else if (pointsValue >= 61 && pointsValue < 71) {
    elOutput.textContent = `Studenti: ${firstNameValue} ${lastNameValue} ka noten 7`;
  } else if (pointsValue >= 71 && pointsValue < 81) {
    elOutput.textContent = `Studenti: ${firstNameValue} ${lastNameValue} ka noten 8`;
  } else if (pointsValue >= 81 && pointsValue < 91) {
    elOutput.textContent = `Studenti: ${firstNameValue} ${lastNameValue} ka noten 9`;
  } else if (pointsValue >= 91) {
    elOutput.textContent = `Studenti: ${firstNameValue} ${lastNameValue} ka noten 10`;
  } else {
    elOutput.textContent = `Studenti: ${firstNameValue} ${lastNameValue} ka noten 5`;
  }

  elOutput.classList.remove('success', 'fail');
  pointsValue > 50 ? elOutput.classList.add('success') : elOutput.classList.add('fail');
});
