//Achieve find, findIndex, filter, some, every, map functions with reduce

const sortBy = function(arr, p) {
    return arr.slice(0).sort(function(a,b) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
}

const users = [{
    name: "Yagnesh",
    age: 33,
    gender: "male",
}, {
    name: "Virat",
    age: 28,
    gender: "male",
}, {
    name: "Rohit",
    age: 32,
    gender: "male",
}, {
    name: "Taimur",
    age: 8,
    gender: "male",
}, {
    name: "Alia",
    age: 19,
    gender: "female",
}, {
    name: "Deepika",
    age: 26,
    gender: "female",
}, {
    name: "Priyanka",
    age: 40,
    gender: "female",
}, ];

//Achieve every
const isAllAdults = users.reduce((p, c) => {
    if (c.age < 18){
      p = false;
    }
    return p;
}, true);
  
console.log(isAllAdults);

//Achieve some
const isAnyAdult = users.reduce((p, c) => {
    if (c.age > 18){
      p = true;
    }
    return p;
}, false);
  
console.log(isAnyAdult);

//Achieve filter
const femaleList = users.reduce((p, c) => {
    if (c.gender === 'female'){
      p.push(c);
    }
    return p;
}, []);
  
console.log(femaleList);

//Achieve findIndex
const deepikaIndex = users.reduce((p, c, index) => {
    if (c.name === "Deepika") {
      return index;
    }
    return p;
}, -1);

console.log(deepikaIndex);

//Achieve find
const isDeepikaInList = users.reduce((p, c, index) => {
    if (c.name === "Deepika") {
      return c;
    }
    return p;
}, {});

console.log(isDeepikaInList);

//Achieve map
const ageSum = users.reduce((p, c, index) => {
    p += c.age;
    return p;
}, 0);

console.log(ageSum);

//////////////////////////////////////

//Group by
const groupBy = users.reduce((p, c) => {
    const genKey = Math.floor(c.age / 10);
    const key = `${genKey}0-${genKey}9`;
    if (!p[key]) {
      p[key] = [];
    }
    p[key].push(c);
    p[key] = sortBy(p[key], 'age');
    return p;
  }, {});
  
  console.log(groupBy);