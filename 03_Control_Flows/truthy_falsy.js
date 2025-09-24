/*
const val=" ";

if(val){
    console.log("String is Truth Value")
}else{
    console.log("Dont Have Any Value")
}

//By Default Values Will be Assigned

//Faslsy Value
 false,"",0, null, NaN, 
 
//Truthy Values
true,"False", " " , "String", [], "0", function (){}


// To Check The Array Values is Empty

const username=[];

if (username.length===0){
    console.log("Array Is Empty")
}else {
    console.log("Array Is Not Empty");
}

//To Check The Object Is Empty Or Not

const userdetails={}


if(Object.values(userdetails).length == 0){     //Object Consists of Keys And Values use Object Variable Name.  (. length gives length of object)
    console.log("object Is Empty");    
}
*/


//************ NULLISH COALESCING OPERATOR*********************************************************
/*
(??) null : undefined
                                         // This Help During Getting Values From DataBases
let val1;
val1= 5 ?? 10;
console.log(val1);   

val1= undefined ?? 25 ?? 29;
console.log(val1)

val2 = null ?? 29 ?? 69      //This Will Get The Last Values That Will Be At Last
console.log(val2);

*/

//***************TERNARY OPERATOR*********************************************
    //It Also Work As A If Else Statements
const vote=17;

vote >= 18 ? console.log("You Can Vote") : console.log("You Less than 18"); 


//Nullish Coalescing And Ternary Operator Both Are Different
//Single ? And Double ?? Have A Lot Of Difference