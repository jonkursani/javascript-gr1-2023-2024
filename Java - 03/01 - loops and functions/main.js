// for

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i, 'cift');
//   } else {
//     console.log(i, 'tek');
//   }
// }

// break and continue
// for (let i = 1; i <= 20; i++) {
//   if (i === 15) {
//     console.log('E gjeta 15-shin');
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i === 10) {
//     console.log('Skip 10-shin');
//     continue;
//   }
//   console.log(i);
// }

// for of - (foreach)

const todos = [
  { id: 1, title: 'Todo 1' },
  { id: 2, title: 'Todo 2' },
  { id: 3, title: 'Todo 3' },
  { id: 4, title: 'Todo 4' },
  { id: 5, title: 'Todo 5' },
  { id: 6, title: 'Todo 6' },
  { id: 7, title: 'Todo 7' },
  { id: 8, title: 'Todo 8' },
  { id: 9, title: 'Todo 9' },
  { id: 10, title: 'Todo 10' },
];

// for (const item of todos) {
//   console.log('Titulli', item.title);
// }

// ngjashem me for-in e thjeshte
// for (const key in todos) {
//   console.log(todos[key].title);
// }

// functions
// void
function sayHello(name = 'Test') {
  console.log('Hello', name);
}

// () - e bon ekzekutimin e funksionit
sayHello('Sara');

function add(x, y) {
  return x + y;
}
// arrow functions - () => {}
// equivalente
// const add = (x, y) => {};

const res = add(5, 5);
console.log('res', add(5, 5));
console.log('res', res);

// array methods
// todos.forEach(function (item) {
//   console.log(item);
// });

// funksionet qe kthejin veq ni rresht mundeni mi largu kllapat gjarperore
// todos.forEach((item) => console.log(item));
// todos.forEach((item) => {
//   console.log(item);
//   console.log('Test');
// });

// map - mapon ne nje array te ri
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubleNumbers = numbers.map(function (num) {
//   return num * 2;
// });
// short version
const doubleNumbers = numbers.map((num) => num * 2);

// console.log(doubleNumbers);

// filter
// const evenNumbers = numbers.filter(function (num) {
//   return num % 2 === 0;
// });
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

const selectedNumber = numbers.find((num) => num === 3);
console.log(selectedNumber);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// chain methods
// const filteredCompanies = companies.filter((company) => company.category === 'Finance');
// const newArray = filteredCompanies.map((company) => {
//   return { name: company.name, category: company.category };
// });

const financeCompanies = companies
  .filter((company) => company.category === 'Finance')
  .map((company) => {
    return {
      name: company.name,
      category: company.category,
    };
  });

console.log(financeCompanies);
