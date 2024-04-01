// Functions

// void
function sayHello(name = 'Filan') {
  //   console.log('Hello', name);
}

// () - e ekzekutojin funksionin
sayHello();
sayHello('Olti');

// return values
function add(x, y) {
  return x + y;
}

// console.log('Shuma', add(5, 10));
const sum = add(5, 10);
// console.log('Shuma', sum);

// arrow functions
// const add = (x, y) => {
//   const sum = x + y;
//   return sum;
// };
// const add = (x, y) => x + y;

// function createObj() {
//   return { a: 1, b: 2 };
// }
// const createObj = () => {
//   return { a: 1, b: 2 };
// };
// const createObj = () => ({ a: 1, b: 2 });
// console.log(createObj());

// array si parameter
function getRandomNumber(numbers) {
  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
}

// console.log(getRandomNumber([55, 33, 22, 56, 21, 67]));

// object si parameter
function getUser(user) {
  return `User: ${user.id} with name ${user.name}`;
}

const user = {
  id: 1,
  name: 'Filan',
};
// console.log(getUser(user));
// console.log(getUser({ id: 2, name: 'Filane' }));

// Challenge 1
// function getCelsius(f) {
//   return ((f - 32) * 5) / 9;
// }

// const getCelsius = (f) => {
//   return ((f - 32) * 5) / 9;
// };

const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2
// function minMax(array) {
//   const min = Math.min(...array);
//   const max = Math.max(...array);
//   return { mini: min, max };
// }

// const minMax = (array) => {
//   const min = Math.min(...array);
//   const max = Math.max(...array);
//   return { mini: min, max };
// };

const minMax = (array) => ({
  min: Math.min(...array),
  max: Math.max(...array),
});

console.log(minMax([44, 55, 32, 78, 123, 765, 321]));
