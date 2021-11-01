///Achieve find, findIndex, filter, some, every, map functions with reduce
const users = [{
    name: "Shristi",
    age: 24,
    gender: "female",
}, {
    name: "Virat",
    age: 28,
    gender: "male",
}, {
    name: "Rohit",
    age: 32,
    gender: "male",
}, {
    name: "Taimur",
    age: 8,
    gender: "male",
}, {
    name: "Alia",
    age: 19,
    gender: "female",
}, {
    name: "Deepika",
    age: 26,
    gender: "female",
}, {
    name: "Priyanka",
    age: 40,
    gender: "female",
}, ];

//Map
function Reducer(item1,item2){
    return item1 + item2
}
 const Agesum=users.map((res=>res.age)).reduce(Reducer)
 console.log(Agesum)

///Filter
 function Reducer1(item1){
 return item1.gender==='female'
 }
 
 const GenderFind= users.filter((res=>Reducer1(res)))
console.log(GenderFind)

///Some
function Reducer3(item1){
    return item1.age>18
}
 
const isAnyAdult=users.some((res=>Reducer3(res)))
console.log(isAnyAdult)
 
//Every
function Reducer4(item1){
    return item1.age<5
}

const isAllAdult=users.every((res=>Reducer4(res)))
console.log(isAllAdult)

///Find
function Reducer5(item1){
    return item1.name=='Shristi'
}

const FindName=users.find((res=>Reducer5(res)))
console.log(FindName)

////FindIndex
function Reducer6(item1){
    return item1.name=='Deepika'
}

const FindNameIndex=users.findIndex(Reducer6)
     
      console.log(FindNameIndex)
    
