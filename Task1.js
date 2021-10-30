//Aditya Kumar

//Task 1
// greaterThan10([1,2,3,11,12,13]);

greaterThan10 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>10) console.log(arr[i]);
    }
};
greaterThan10([1,2,3,11,12,13]);