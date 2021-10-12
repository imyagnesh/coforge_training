// const arr = [...Array(1000000).keys()];

// console.time('for')
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.timeEnd('for')

// console.time('reduce')
// const sum = arr.reduce((p, c) => p + c, 0);
// console.timeEnd('reduce')

// console.log(sum);

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
  {
    name: "Amitabh",
    age: 75,
    gender: "male",
  },
];

// {
//     "0-9": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": []
// }

const age = 28;

const genKey = Math.floor(28 / 10);

console.log(`${genKey}0-${genKey}9`);

const groupBy = users.reduce((p, c) => {
  const genKey = Math.floor(c.age / 10);
  const key = `${genKey}0-${genKey}9`;
  if (!p[key]) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupBy);

// {
//     male: [],
//     female: []
// }

// O(N)
const rohitIndex = users.reduce((p, c, index) => {
  if (c.name === "Shikar") {
    return index;
  }
  return p;
}, -1);

const maleRecords = users.reduce((p, c) => {
  if (c.gender === "male") {
    p.push(c);
  }
  return p;
}, []);

console.log(maleRecords);

console.log(rohitIndex);

//    Reduce

// FindIndex
// Find
// Some
// Every
// Filter
