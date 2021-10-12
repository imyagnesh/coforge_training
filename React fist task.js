
// Sadhana
// task 1   Program greater than 10

let arr = [1,2,3,11,12,13];
console.log(...arr) 
let i,k=10;
for(i=0;i<arr.length;i++)
{
    if(k<arr[i])
    {
        console.log(arr[i]);
    }
}


//task 2

const sumArray = (...par) => {
    let result = 0,i;
    for(i=0;i<par.length;i++) {
      if (typeof par[i] == 'number') {
          result = result + par[i];
      }
    }
    return result;
  }

const addOnlyNums = (...par) => sumArray(...par)
addOnlyNums(1, 'cat', 3, 4);

//task 3

let arr3 = [10,2,11];
console.log(...arr3) 
let i3,sum3=0;
for(i3=0;i3<arr.length;i3++)
{
    sum3=sum3+arr3[i];
}
console.log(sum3);


//task 4
let arr1 = [2,4,3];
console.log(...arr1) 
let i1,sum1=0;
for(i1=0;i<arr1.length;i1++)
{
    sum1=sum1+arr1[i1];
    var k1=sum1*sum1;
}
console.log(k);
