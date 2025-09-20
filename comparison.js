/* 
         *************COMPARISION OPERATORS***********

   1 =>   greater than operator (>) Check The Value Is Greater or not.
     2 =>   Greater Than Or Equal to(>=) Check The Value Is Greater TahnOr Equal To.
     3 =>   Less Than   Operator (<) Check For The Value IS Less than. 
     4=>    Less Than Or Equal To (<=) Check For The Value Is Less Than Or Equal.
     5=>    Equal To (==)  Check The Value Is Equal to or not.
     6=>    Equal To (===)Strictly Check.
      This Will Not Just Check equal to but also Check For Datatype and Values.
*/

//Number to number comparision

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);


// //String to number comparision
// console.log("29" > 1);
// //It will automatically converts the string to number

// console.log("This Is The answer" , 5 == 5);
// console.log("This Is The answer 2 " , "5" === 5); //This will Check the whole datatype and values


/* 
**********************PRIMITIVE DATA TYPES*****************************

#Primitive DataType
1) String
2) Number
3) Boolean
4) Null
5) Undefined
6) BigInt
7) 


console.log(typeof "Mohammed Zubair");  //String
console.log(typeof 2+2);                //Number
console.log(typeof 2 > 1);              //Boolean
let a;
console.log(typeof a);                  //Under=fined
let n=56778990332875640092233765432n;   //Bigint
console.log(typeof n);
*/


/*

#NON PRIMITIVE DATATYPE

1)Array
2)Objects
3)Functions

*/

let heros=["Power Rangers", "Bob The Builder", "shinchan", "Doreamon"];
console.log(heros)
let mydata={
    name:"Mohammed zubair",
    age:"22",
    Address:"1-5-556/ Amernagar Karimnagar",
    relation_status:"Single",
    Mobile:7329983629

}
console.log(mydata)


let myfunction= function(){
    console.log("Hello World");
    console.log("How Are You");
}

myfunction();

console.log(typeof heros);
console.log(typeof mydata);
console.log(typeof myfunction);
