const data = [1,2,6,9,4,10,40,30];
//********************************GREATER THAN 10********************************** */

console.log(data.filter((no)=>no>10));

//***************************ADD NOS ONLY*************************************** */

const addNoOnly = (...data)=>{
    let add = 0
    for(let i=0;i<data.length;i++){
        if(typeof data[i]==='number'){
            add=add+data[i]
        }
    }
    return add
}
console.log(addNoOnly(1, 'cat', 3, 4))

//***************************************sum*********************************** */

const sum = (...data)=>{

    let sum = 0
    for(let i=0;i<data.length;i++){
        sum = sum + data[i]
    }
    return sum

}

console.log(sum(1,2,3))

//************************************SUM AND SQUARE********************************** */

const sumAndSquare = (...data)=>{

    let sum = 0
    for(let i=0;i<data.length;i++){
        sum = sum + data[i]
    }
    return sum*sum

}

console.log(sumAndSquare(1,2,5))