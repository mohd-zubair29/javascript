/* **************************** NUMBER**********************
let anumb=292003

console.log(anumb.toString());          //This Will convert An Number to String


console.log(anumb.toFixed(2));          //This Is Used In E-Commerce It Will Add An Number of Zeros In Last With Decimal

let anothernumber=22.145;     
console.log(anothernumber.toFixed(2));   
console.log(anothernumber.toPrecision(3));    //This Will Give An around Number

let numerator=100000000;

console.log(numerator);    //This will Directly Show The Given Value

console.log(numerator.toLocaleString());  //This Will Directly Give The US Standard value
console.log(numerator.toLocaleString('en-IN'));  //This Will Give The Indain Standard Value
*/


//*******************MATHS******************************
/*
let lumber=300;
console.log(Math);

console.log((Math.floor(3.40))); //This Method Will Take A Floor Value Or Below Value /Lowest Value Lega
console.log((Math.ceil(39.87))); //This Method Will TAke An Above Value Or Upper Value / Greater Value Leta

let lumbers=5;
let equal= (Math.sqrt(lumbers));   //this will give the 2.477 something around value
console.log(Math.ceil(equal));     //By using this we can make round of the value



// console.log(Math.min(8,9,99,4,31, 9, 12, 45, 76));
*/

console.log(Math.random());  //This Will Give The Value From 0 to 1 In Decimal Value Only
console.log(Math.random()*10);  //If We Want Value From 0 To 10 We Have to Use Like This
console.log((Math.random()*10)+1);   //This Is USed To Avoid the result from zero so we add +1
console.log((Math.floor(Math.random()*10))+1);  //This Will Remove The Decimal Values and Give The Lowest Value That Is Round off 


//If We Want Value From Required Number
const min=10;
const max=20;

console.log((Math.floor(Math.random()*(max-min +1)))+min);   //This Give The Value From Above 10 and Maximum 20