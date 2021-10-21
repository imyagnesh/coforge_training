//Day 2
//Using Reduce Method
//Sadhana
//Task 1

let student=[{
    Name:'sara',
    age:12,
    marks:450
},
{
Name:'sarita',
age:45,
marks:430
},
{
    Name:'sadhana',
    age:22,
    marks:480
},
{
    Name:'Anil',
    age:29,
    marks:380
},
             {
    Name:'Arti',
    age:19,
    marks:280
},
             {
    Name:'Shanoo',
    age:49,
    marks:300
}
];
//**************************************** */Task 1 Sum Method
let total=student.reduce(function(pre,curr){
    //console.log("previous value:",pre,"current value:",curr);
    return (pre+curr.marks);

},0);
console.log(total);

    //****************************************************Task 2 Find index

const findIndex = student.reduce((pre, curr, index) => {
    if (curr.Name === "sadhana") {
        return index;
    }
    return pre;
}, -1);
console.log(findIndex);

//******************************************************************* */task 3 Every Method

const every = student.reduce((pre, curr, index) => {
    if(curr.age>=18)
    {return pre=true;}
    else 
    {return pre=false;}
   },true);
  if(pre==true)
  {
      console.log(pre.age);
  }
console.log(every);

