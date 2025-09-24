//Controls Flows

/*
if(condition){
                 //Scope
}

if(true){
    //This Will Execute
}
if(false){
    //It Wont Execute
}


********************OPERATORS*********************************

<     =>Less Than Operator
>     =>greater Than Operator
<=    => LessThan Or Equal To Operator
>=    => Greater Than Or Equal To Operator
=     => Assigment Operator(This Will Assigned The Value Into Variable)
==    => Equal To Operator
===   => Equal Too(This Will Check The DataType Also And Condition)
!     => Not Operator



if(2<3){
    console.log("Executed");   //2 Is Less Than Three It Will Executed
}

if (3>5){
    console.log("Executed");  //It Wont Execute Because 3 Is Less Than 5
}

if(5<=6){ //It Will Executed Because 5 Is Less Than 6
    if(5<=5){ //It Will get Executed Because 5 Is Equal To 5
    console.log("Executed") 
}
    

if(10 > 8){
    console.log("Executed")
}

if(10 >= 15){  //It Wont Execute Because 15 Is Greater Than 10
    console.log("Executed");
}

if(15>=15){      //This Will Execute Because 15 Is Equal to 15
    console.log("Successfully Executed Brother");
}
    

//Equal To Operators

const result="Mohammed Zubair Passed";      //String Is assigned to Resul Variable
console.log(result);                        //result variable stores the above string and prints


const newnum=33;
if(newnum==33){                       //This Operator just check Weather given both are equal or not
    console.log('Both are equal');
}



const anothernum=29;
if(anothernum===29){
    console.log("Successfully Executed");    //anothernum has 29 num and we are comparing with 29 number 
}



if (29 === "29"){
    console.log("Executed");     //This Wont Work Because We are Comparing 29 number With String This Will Also Check The Datatype
} 

const temperature=40;
if (temperature > 30){
    console.log("Its So Hot Outside");         //This Is The Scope
}
console.log("Temperature May Varies");    //Both Lines Will Get Execute This Line Dont Have Any Linkage With Above Line

const age=18;
if(age >= 18){
    console.log("You Can Vote");
}else{
    console.log("You Can't Vote");
}

const newage=15;
if(newage >= 18){
    console.log("The age is Greater than 18")
}else{
    console.log("Age is Not greater Than 18")
}
*/


/*
*************************ELSE-IF STATEMENTS**************************************************

let marks=100;
if(marks < 40){
    console.log("Just PASS 'D' ")
}else if(marks < 50){
    console.log("Average")
}else if(marks < 80){
    console.log("Good")
}else if(marks <= 90){
    console.log("Satisfactory")
}else if(marks <=100 ){
    console.log("CLASS FIRST");
}else{
    console.log("FAILED")
}
*/

//Creating An App With Login In Feature

const userLoggedIn=true;
const userDebitCard=true;
const userAge18=true;

// if(userLoggedIn && userDebitCard && userAge18){                       //In This User Need to have The All 3 values True If Any False Then They Cant Access
//     console.log("User Can Avail All The Features Of Subscription Plan");
// }
 
if(userLoggedIn || userDebitCard){    //If User Have Any Of The Particular Thing Then They Can Access The Some Resourses
    console.log("User can Access Only Some Videos");
}