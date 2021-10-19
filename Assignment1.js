/**
 * Assignment based on reduce funtion
 */
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


/**
 * Task 1
 * Group by function
 * Sort group item
 */
const groupBy = users.reduce((p, c) => {
    const genKey = Math.floor(c.age / 10);
    const key = `${genKey}0-${genKey}9`;
    if (!p[key]) {
        p[key] = [];
    }
    p[key].push(c);
    //Sort group list
    p[key].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    return p;
}, {});

console.log(groupBy);




/**
 * findIndex function implementation
 */
const findIndex = users.reduce((p, c, index) => {
    if (c.name === "Priyanka") {
        return index;
    }
    return p;
}, -1);

console.log(findIndex)

/**
* find function implementation
*/
const find = users.reduce((p, c, index) => {
    if (c.name === "Priyanka") {
        p = { ...c };
    }
    return p;
}, {});

console.log(find)


/**
* Filter function implementation
*/
const filter = users.reduce((p, c, index) => {
    if (c.gender === "male") {
        p.push(c);
    }
    return p;
}, []);

console.log(find)



/**
* Some function implementation
*/
const some = users.reduce((p, c, index) => {
    if (c.gender === "male") {
        p = true
    }
    return p;
}, false);

console.log(some)

/**
* Every function implementation
*/
const every = users.reduce((p, c, index) => {
    if (c.age > 5 && p) {
        p = true;;
    } else {
        p = false;
    }
    return p;
}, true);

console.log(every)