// let, const, var

// Deklarimi dhe inicializimi
let firstName = 'Filan';
const lastName = 'Fisteku';
// const lastName = "Fisteku";
// const lastName = 'Fisteku"; // error
// const lastName = "Fisteku'; // error

// Correct
let score;
score = 1;
// console.log('score', score);

if (true) {
  //   score = score + 1;
  score += 1;
}

// console.log('score after if', score);

// const pi; // error
const pi = 3.14; // correct
// pi = 3.15; // error

// Deklarimi
let a, b, c;

// konkatinimi
console.log('Emri:' + ' ' + firstName + '\n' + 'Mbiemri: ' + lastName);

// interpolimi
console.log(`Emri: ${firstName} \nMbiemri: ${lastName} Mosha: ${10 + 20}`);

// Get element from html file
const firstNameSpan = document.querySelector('#first-name');
const lastNameSpan = document.querySelector('.last-name');

// console.log(firstNameSpan, lastNameSpan);

// Assign ni vlere te re
firstNameSpan.innerHTML = firstName;
// Metoda e shkurte
// document.querySelector('#first-name').innerHTML = firstName;
lastNameSpan.innerHTML = lastName;

// Variables

// Mundet me fillu me shkronja ose simboli $, jo numer
// camelCase notation
let middleName = 'Test';

// numbers
let number1 = 3;
number1 = 10;

let number2 = number1;
number2 = 5;
console.log(number1);
console.log(number2);

// string
let middleName2 = 'Test';

// boolean
let isLoggedIn = true;

if (isLoggedIn) {
  //   console.log('User is logged in');
}

// Reference types

// arrays
const numbers = [1, 2, 3, 4];
// numbers = [1]; //error
// console.log('array', numbers);
numbers.push('5');
numbers.push(true);
// console.log('array', numbers);

// objects
const student = {
  firstName: 'Filan',
  lastName: 'Fisteku',
  'middle name': 'Filane',
};

// reassign value
// student.firstName = 'Test';
student.age = 30;

// console.log(student);
// console.log(student.firstName);
// console.log(student['middle name']);
// console.log(student['lastName']);

const student2 = student;
student2.firstName = 'Test';

console.log('st 1', student);
console.log('st 2', student2);
