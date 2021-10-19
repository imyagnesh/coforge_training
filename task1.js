
const greaterThan10 = (...params) => {
    const arr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] > 10) {
            arr.push(params[i]);
        }

    }
    return arr;
};

console.log(greaterThan10(1, 2, 3, 11, 12, 13));

const addOnlyNums = (...param) => {
    let result = 0;
    for (let index = 0; index < param.length; index++) {
        const element = param[index];

        if (typeof element == 'number') {
            result = result + element;
        }

    }
    return result;

}

console.log(addOnlyNums(1, 'cat', 3, 4));


const sumEveryOther=(...params)=>{
    let result=0;
    for (let index = 0; index < params.length; index++) {
        if(index%2==0)
        {
            const element = params[index];
            result=result+element;
        }
    }
    return result;
}

console.log(sumEveryOther(10, 2, 11));



const sum_ = (params) => {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
        result = result + params[i];
    }
    return result;
};

const square = (params) => {
    var arr = [];
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        const value = element * element;
        arr.push(value);
    }
    return arr;
}

const sumAndSquare = (...params) => {
    console.log(sum_(params));
    console.log(square(params));
}

sumAndSquare(2, 4, 3);

