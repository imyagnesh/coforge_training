const sumArray = (...params) => {
  let result = 0;
  for(i=0;i<params.length;i++) {
    if (typeof params[i] == 'number') {
        result = result + params[i];
    }
  }
  return result;
}

const square = num => num * num;

//First task
const greaterThan10 = (params) => params.filter(val => val > 10)
greaterThan10([1,2,3,11,12,13]);

//Second task
const addOnlyNums = (...params) => sumArray(...params)
addOnlyNums(1, 'cat', 3, 4);

//Thirs task
const sumEveryOther = (a, b, c, ...rest) => sumArray(...rest)
sumEveryOther(10, 2, 11, 14, 15);

//Fourth task
const sumAndSquare = (...rest) => square(sumArray(...rest))
sumAndSquare(2, 4, 3);
