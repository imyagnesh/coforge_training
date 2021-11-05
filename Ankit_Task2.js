const users = [
    {
        name: "Yagnesh",
        age: 33,
        gender: "male",
    },
    {
        name: "Virat",
        age: 28,
        gender: "male",
    },
    {
        name: "Rohit",
        age: 32,
        gender: "male",
    },
    {
        name: "Taimur",
        age: 8,
        gender: "male",
    },
    {
        name: "Alia",
        age: 19,
        gender: "female",
    },
    {
        name: "Dipeeka",
        age: 26,
        gender: "female",
    },
    {
        name: "Priyanka",
        age: 40,
        gender: "female",
    },
    {
        name: "Amitabh",
        age: 75,
        gender: "male",
    },
];

// GroupBy sort
// FindIndex
// Find
// Filter
// Some
// Every

//  ***********************************GroupBy**************************************
let result = users.reduce((previous, current) => {
	if(!previous[current.age]){
		previous[current.age] = { age: 0 };
	}
	previous[current.age].age += current.age;
	return previous;
    
}, {})

console.log(result);



// **********************************FindIndex*************************************


let resultIndex = users.reduce((previous,current,index)=>{
    if(current.name === "Taimur"){
        return previous+index
    }
    return previous
},0)

console.log(resultIndex)

// **********************************Find*************************************

let resultFind = users.reduce((previous,current)=>{
    if(current.name==="Taimur"){
        return true
    }
    return previous

},false)

console.log(resultFind)

// **************************************Filter***********************************

const resultFilter = users.reduce((previous, current) => {
    if (current.gender === "male") {
        previous.push(current);
    }
    return previous;
}, []);

console.log(resultFilter)

// **************************************Some***********************************

const someResult = users.reduce((previous, current) => {
    if (current.age > 30) {
        previous = true
    }
    return previous;
}, false);

console.log(someResult)