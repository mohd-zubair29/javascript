//Reduce Method 
//This Is very Help Ful In Card Shopping System
//It Consiste of accumlator=> which means past Value
//Current Value => Current value in the array Have To Be Taken

let num=[1,2,3];

// const val=num.reduce(function (accumlator, CurrentValue){
//     console.log(`Acc Value:${accumlator} and CurrentVAlue:${CurrentValue}`)
//     return accumlator+CurrentValue;
//},0) //It Is Compulsory To Write the Initial Value At The end Of Scope That Will Definr The Initial Value
// console.log(val);

// OUTPUT=>Acc Value:0 and CurrentVAlue:1
// Acc Value:1 and CurrentVAlue:2
// Acc Value:3 and CurrentVAlue:3
//ANSWER:6

//Reduce Method With Arrow Function

// const anoval= num.reduce((accumlator, CurrentValue)=> accumlator+CurrentValue, 0)  //accumalator means initial value

// console.log(anoval);

// OUTPUT=> 6 // This Is Also Same As Above ButSomeWhat Short Method To Write It


const course=[
    {courseName:"Apna College",
        coursePrice:8999
    },
    {courseName:"Sanket DSA",
        coursePrice:6999
    },
    {courseName:"Love Babbar",
        coursePrice:5999
    },
    {courseName:"Striver",
        coursePrice:0
    },
];

const topay= course.reduce((accumalator, allcourse)=>(accumalator+ allcourse.coursePrice), 0);  //allcourse marks to each object in array, Accumalator maps to current value
console.log(topay);  //This Will Help to Count Each and every price that has been given in array with course price