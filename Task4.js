//Task 4
// sumAndSquare(2, 4, 3);

const sumAndSquare = (...params) => {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        sum += element;
    }
    return sum**2;
}

console.log(sumAndSquare(2, 4, 3));