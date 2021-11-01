const greaterThan10 = (array) => {
  return array.filter((res) => res > 10);
};
console.log(greaterThan10([1, 2, 3, 11, 12, 13]));

// task2
const addOnlyNums = (...items) => {
  let a = 0;
  for (i = 0; i < items.length; i++) {
    if (typeof items[i] == "number") {
      a = a + items[i];
    }
  }

  return a;
};

 console.log(addOnlyNums(1, "cat", 3, 4));

//task3
const sumEveryOther = (a, ...rest) => {
  return addOnlyNums(...rest);
};
console.log(sumEveryOther(10,12,13));

//task4

const square = (num) => {
  var  a =num*num;
  return a;
};

const sumAndSquare = (...items) => {
  var a = addOnlyNums(...items);
  return square(a);
};

console.log(sumAndSquare(2, 4, 3));