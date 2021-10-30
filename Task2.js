//Task 2
// addOnlyNums(1, 'cat', 3, 4);

const addOnlyNums = (...params) => {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if(typeof(element) === 'number'){
            sum += element;
        }
    }
    return sum;
}

console.log(addOnlyNums(1, 'cat', 3, 4));