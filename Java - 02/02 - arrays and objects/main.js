// Arrays

// let ose const emri i arrayt

const numbers = [1, 2, 3, 4];

// get element
// console.log('2', numbers[1]);
// modify
// numbers[2] = 5;
// console.log(numbers);
// length - numri i elementeve
// console.log('length', numbers.length);

const mixedArray = [1, true, '5'];
// const nestedArray = [numbers, mixedArray];
// console.log(nestedArray);
// console.log(nestedArray[0][2]);
// console.log(nestedArray[1][1]);

// push - shton ni element ne fund
// numbers.push(5);
// console.log('push', numbers);

// pop - largon ni element prej fundit
numbers.pop();
// console.log('pop', numbers);

// unshift - e shton ni element ne fillim
// numbers.unshift(0);
// console.log('unshift', numbers);

// shift - e largon ni element prej fillimit
// numbers.shift();
// console.log('shift', numbers);

// includes
// console.log('includes', numbers.includes(2));

// join i kthen ne string te ndare me ni seperator ""
// console.log('join', numbers.join(','));

// reverse
// console.log('reverse', numbers.reverse());

// concat
// console.log('concat', numbers.concat(mixedArray));

// spread operator ...
// [1, 2, 3, 4]
// [1, true, '5']
const newArray = [...numbers, ...mixedArray];
// console.log(newArray);

// const nuk lejon ri inicializimin
// newArray = [1, 2]; // error

// Challenge 2
const arr1 = [1, 2, 3, 4, 5]; // pop
const arr2 = [5, 6, 7, 8, 9, 10]; // shift
// [1,2,3,4,5,6,7,8,9,10]

const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
// console.log(arr3);

// objects

const student = {
  firstName: 'John',
  lastName: 'Doe',
  'middle name': 'Name',
  address: {
    street: 'Cacttus Str.',
    city: 'Prishtine',
  },
};

// get elements
console.log(`
  Studenti: ${student.firstName}, rruga ${student.address.street}
`);

// menyrat e qasjes
student.firstName = 'Jane';
// student['firstName'];
student['middle name'];

// delete key
delete student.lastName;
// console.log('delete', student);

// add key
student.age = 30;
// console.log('add', student);

const todos = [
  {
    id: 1,
    title: 'Todo 1',
  },
  {
    id: 2,
    title: 'Todo 2',
  },
];

// console.log('todo 1 title:', todos[0].title);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// spread operator merr vetem vlerat ...
const obj3 = { ...obj1, ...obj2 };

// console.log('obj3', obj3);
// console.log('keys', Object.keys(obj3));
// console.log('length', Object.keys(obj3).length);
// console.log('values', Object.values(obj3));
// console.log('entries', Object.entries(obj3));

// object descructuring
console.log(`Student ${student.firstName}`);

// const stFirstName = student.firstName;
// const stLastName = student.lastName;
// stFirstName - naming (emer i variables),
// kur nuk e specifikon e mer emrin e njejte
// nuk ki nevoj lastName: lastName
const { firstName: stFirstName, lastName } = student;

console.log(`Student ${stFirstName}`);
