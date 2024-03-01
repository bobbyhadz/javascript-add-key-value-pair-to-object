// EXAMPLE 1 - Add a Key/Value pair to an Object in JavaScript

const obj = {name: 'Bobby'};

// ✅ using dot notation
obj.age = 30;

// ✅ using bracket notation
obj['country'] = 'Chile';

// 👇️ {name: 'Bobby', age: 30, country: 'Chile'}
console.log(obj);

// 👇️ Chile
console.log(obj['country']);

// 👇️ Bobby
console.log(obj['name']);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using dot notation to add a key-value pair to an object

// const obj = {name: 'Bobby'};

// obj.age = 30;
// obj.country = 'Chile';
// obj.tasks = ['walk the dog', 'cook dinner'];

// // {
// //   name: 'Bobby',
// //   age: 30,
// //   country: 'Chile',
// //   tasks: [ 'walk the dog', 'cook dinner' ]
// // }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use bracket notation when the name of the key is in a variable

// const obj = {};

// const key = 'city';
// obj[key] = 'Santiago';

// // 👇️ {city: 'Santiago'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add a Key/Value pair to an Object using Object.assign()

// const obj = {country: 'Chile'};

// Object.assign(obj, {color: 'red', food: 'pizza'});

// // 👇️️ {country: 'Chile', color: 'red', food: 'pizza'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Add a Key/Value pair to an Object using spread syntax (...)

// let obj = {name: 'Bobby'};

// obj = {...obj, color: 'green'};

// // 👇️ {name: 'Bobby', color: 'green'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Add a Key/Value pair to an Object using Object.defineProperty()

// const obj = {name: 'Bobby'};

// Object.defineProperty(obj, 'age', {
//   value: 30,
//   enumerable: true,
//   configurable: true,
//   writable: true,
// });

// console.log(obj); // 👉️ { name: 'Bobby', age: 30 }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Add a Property to the Beginning of an Object in Javascript

// let obj = {two: 2, three: 3};

// obj = {one: 1, ...obj};

// console.log(obj); // 👉️ {one: 1, two: 2, three: 3}

// ------------------------------------------------------------------

// // EXAMPLE 8 - Add a property to the beginning of an Object using `Object.assign()`

// let obj = {two: 2, three: 3};
// obj = Object.assign({one: 1}, obj);

// console.log(obj); // 👉️ {one: 1, two: 2, three: 3}
