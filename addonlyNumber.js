const array = [1, 'cat', 3, 4];
let result = 0;
for(let i=0; i<array.length; i++){
    if(!isNaN(array[i])){
       result = result+ array[i]      
    }
}

console.log(result);
