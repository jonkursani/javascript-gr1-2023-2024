// Strings

// input qe e marrim dikun
// let firstName = 'SaRa';

// console.log('lowercase:', firstName.toLowerCase());
// console.log('uppercase:', firstName.toUpperCase());

// if (firstName.toLowerCase() === 'sara') {
//   console.log('Sara eshte ne klase');
// } else {
//   console.log('Sara nuk eshte ne klase');
// }

// trim
// null ose '' - dyjat nuk kan vlere
// let input = '  vlera    ';

// if (input.trim()) {
//   console.log('Inputi ka vlere', input.trim());
// } else {
//   console.log('Inputi nuk ka vlere');
// }

// indexOf
// let catDog = 'catdog';
// console.log('a', catDog.indexOf('a'));
// console.log('x', catDog.indexOf('x'));

// slice
// let cacttus = 'Cacttus Education';
// slice(x, y - not inclusive) ***

// console.log('Education', cacttus.slice(8));
// console.log('Cacttus', cacttus.slice(0, 7));

// replace
// let cacttus = 'Cacttus Education a good good school';
// console.log(cacttus.replace('a good', 'the best'));
// console.log(cacttus.replaceAll('good', 'best'));

// Math
// console.log('abs', Math.abs(-45));
// console.log('floor', Math.floor(9.99));
// console.log('ceil', Math.ceil(9.99));
// Gjenero numrat 0 deri 100
// console.log(Math.floor(Math.random() * 100 + 1));

// parsing
// let x = '50';
// console.log('parse int', parseInt(x));
// console.log('parse int', +x);
// console.log('parse int', Number(x));

// Butonin me handle per click event

const saveBtn = document.querySelector('.btn-save');
saveBtn.addEventListener('click', () => {
  const searchInput = document.querySelector('.search-inp');
  const searchInputValue = searchInput.value;

  //   Nese ska vlere
  if (!searchInputValue.trim()) {
    alert('Ju lutem shkruani nje fjale.');
    return;
  }

  const stringLengthSpan = document.querySelector('.string-length');
  stringLengthSpan.innerHTML = `Numri i karaktereve per fjalen 
  ${searchInputValue} eshte: ${searchInputValue.length}`;

  searchInput.value = '';
});
