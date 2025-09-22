/*
=> {}        //This Is Also Called As Scope.
   This Will In objects json
  but in Functions, if-else statements it is knows as Scope
*/

//Global Scope  => which Function/block can access it
//Local Scope   => Only Access Inside the block

// let a=10;
// const b=20;
// var c=30;

// console.log(a);    O/P: 10
// console.log(b);    O/P: 20
// console.log(c);    O/P: 30
/*
if(true){    //Inside the functions variables are Local Scope
let a=10;   
const b=20;
var c=30;     //This Give output because of local and global declaration
}


// console.log(a);   //It is Showing an Error Because It Is a Local Scope
// console.log(b);
console.log(c);
*/


let a=10;   //This Is Global Variable 

if(true){
    let a=300;
    console.log("The value Of Inner scope:", a);   //this Is Local Scope
                                                     //Output is 300
}
 
console.log("The Value Of Outer Scope:", a);  //Output: 10 
