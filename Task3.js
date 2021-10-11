//Task 3
// sumEveryOther(10, 2, 11);

const sumEveryOther = (...params) => {
    let sum = 0;
    for (let i = 0; i < params.length; i+=2) {
        sum += params[i];
    }
    return sum;
}

console.log(sumEveryOther(10, 2, 11));