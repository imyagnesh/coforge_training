console.log("greaterThan10");

const source = [1,2,3,11,12,13];

// function greaterThan10 (input)
// {
//     return input>10;
// }

const greaterThan10 = (input) => input > 10;
console.log(source.filter(greaterThan10));

/********************************************************/
console.log("addOnlyNums");

const addOnlyNums = (...params) =>{
    let answer = 0;
    //console.log(params);
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        //console.log(element);
        if (typeof element == 'number'){
            //console.log("inside if");
            answer = answer + element; 
        }       
    } 
    return answer;
};
console.log(addOnlyNums(1, 'cat', 3, 4));

/*******************************************************************/

console.log("sumEveryOther");

const sumEveryOther = (...input) => {
    let sv = 0;
    for (let i = 0; i < input.length; i++) {
        const int = input[i];
        //console.log(int);
        if (typeof int == 'number') { // added this step as error handling for input type 
            sv = sv + int;            // and not skipping in such case
            //console.log("value of sv "+sv);
            i++;            
        }
        
    }
    return sv;
};
console.log(sumEveryOther(10, 2, 11));
console.log(sumEveryOther(10, 2, 'cat','4',6));

/***********************************************************************/

console.log("sumAndSquare");

const sum = (...params) => {
    let vsum = 0;
    for (let i = 0; i < params.length; i++) {
        const vtemp = params[i];
        vsum = vsum + vtemp;        
    }
    return vsum;
}

const square = (a) => a*a;

console.log(square(sum(2, 4, 3)));
console.log(sum(3,4,5));