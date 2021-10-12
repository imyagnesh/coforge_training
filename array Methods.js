const arr = [1, 2, 3, 4, 3, 5, 6];

const multi2 = arr.map((item) => {
  return item * 2;
});

console.log(multi2);

// always returns same length
// use to manipulate(update) data
// cant add new record
// cant remove any record

const newArr1 = arr.fill(10, 2, 4);

console.log(newArr1);

const longArr = [...Array(1000).keys()];

console.time("findIndex");
const i10 = longArr.findIndex((x) => x === 1212);

const newLongArr = [...longArr.slice(0, i10), 1414, ...longArr.slice(i10 + 1)];
console.timeEnd("findIndex");

console.time("map");
const newLognArr1 = longArr.map((x) => (x === 1212 ? 1414 : x));
console.timeEnd("map");

const users = [
  {
    name: "Yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "Virat",
    age: 28,
    gender: "male",
  },
  {
    name: "Rohit",
    age: 32,
    gender: "male",
  },
  {
    name: "Taimur",
    age: 8,
    gender: "male",
  },
  {
    name: "Alia",
    age: 19,
    gender: "female",
  },
  {
    name: "Dipeeka",
    age: 26,
    gender: "female",
  },
  {
    name: "Priyanka",
    age: 40,
    gender: "female",
  },
];

// O(LogN)

console.time("findIndex");
const rohitIndex = users.findIndex((x) => x.name === "Rohit");

const updatedRecords = [
  ...users.slice(0, rohitIndex),
  { ...users[rohitIndex], age: 30 },
  ...users.slice(rohitIndex + 1),
];
console.timeEnd("findIndex");

// O(N)
console.time("map");
const updatedUsers = users.map((item, index) => {
  if (item.name === "Rohit") {
    return { ...item, age: 30 };
  }
  return item;
});
console.timeEnd("map");

console.log(updatedUsers);

// Methods of Array

// findIndex

// O(logN)
// If record exist then return index
// else return -1
console.log(arr.indexOf(8));

const i = arr.findIndex((item) => item === 3);

const i1 = users.findIndex((item) => item.name === "Rohit");

// find

// O(LogN)
const rohit = users.find((item) => item.name === "Rohit");

console.log(rohit);

console.log(i);
console.log(i1);

// filter
// O(N)
const arr3 = arr.filter((item) => item !== 3);

console.log(arr3);

const maleRecords = users.filter((item) => item.gender === "other");

console.log(maleRecords);

// some
//  O(LogN)
const isViratInTeam = users.some((item) => item.name === "Virat");

console.log(isViratInTeam);

// every
// O(N)
const isEveryoneAdult = users.every((item) => item.age > 18);

console.log(isEveryoneAdult);

// Mutable

// LI(Last In)

// LILO

arr.push(7);

console.log(arr);

// LO (Last Out)
arr.pop();

// FIFO

console.log(arr);

arr.unshift(0);

// FI (FIST IN)

console.log(arr);

// First Out
arr.shift();

console.log(arr);

// Immutable

const newArr = [0, ...arr, 7];

console.log(newArr);

const index = 3;

// const arr1 = arr.slice(0, index);

// const arr2 = arr.slice(3)

// console.log(arr1);
// console.log(arr2);

const addDatainMiddle = [...arr.slice(0, index), ...arr.slice(index + 1)];

console.log(addDatainMiddle);
