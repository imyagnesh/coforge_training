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
    
    ];

// {

// "0-9": [],

// "10-19": [],

// "20-29": [],

// "30-39": []

// }

const agegroup = users.reduce((p,c) => {
const key = c.age;
if (!p[key]) {
    p[key]=[];
}
p[key].push(c);
return p;
},{});

console.log(agegroup);