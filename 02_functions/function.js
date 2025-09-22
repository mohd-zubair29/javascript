// function greeting(){
//     console.log("Assalmualikum");
//     console.log("Assalmualikum");
//     console.log("Assalmualikum");
//     console.log("Assalmualikum");
//     console.log("Assalmualikum");
// }
// greeting();


                 //Parameters
// function numb1(number1, number2){
//    console.log(number1+number2);
//  const result= number1+number2;
//  console.log("Answer Is Here"); 
//  return result;                    //Directly returns the answer
//  console.log("Answer Is Here");    //This Code Wont Work Because After Writing The Return Keyword Function wont work after that
// }

// numb1(3,3) //Arguments

// newnumb=numb1(9,5);
// console.log(newnumb); 


// const userInsta= function(username){
// if(!username){    //If username is empty then return below line
//     return console.log("Please Login First")
// }
//    console.log(`${username} Just LoggedIn`)   //To Check User Is loggedin Or Not
// }
// userInsta("Mohd Zubair");  //Sending username In An Argument



//arguments in functions

function adding(num1){
    console.log(num1);
}

adding(2, 3);   //we can only pass one number

function dusra(num1,num2){
    console.log(num1, num2);
}
dusra(8,10);


function tisra(str2, str3, ...str1){   //This 3 dots is called as it will save the more values in an array type
  console.log(str2, str3, str1)
}

tisra(3,10, 29, 335);      // after savings values in variable or parameters then next left value will be save in other variable


const instadata={
    name:"Mohd Zubair",
    age:22,
    birth:"Hyderabad"
}

function getdata(anyObject){  //Here We can Give The Any Name as Parameter
  console.log(`The UserName is ${ anyObject.name} birth city is ${anyObject.birth}`  );
}
getdata(instadata)  //Sending the Object as Argument so The Function Can Take It as An Parameter



//Same as Above Method But Giving objects values while Calling
function anothermethodforabove(anyobject){
    console.log(`your bank name is ${anyobject.bank} branch ${anyobject.bank_branch} Of District ${anyobject.bank_district}`)
}

anothermethodforabove({
    bank:"Bank Of baroda",
    bank_branch:"karimnagar busstand",
    bank_district:"karimnagar"
})


//Arrays

const studentsnames=["affan", "zubair", "anas", "sumair", "saketh", "zayed", "sohail", "aqeeb"];

function stud(anyobject){
   return anyobject[1]       //In This Method We Use An Arrays For Our Understanding some what similar to objects but some whats differents
}

console.log(stud(studentsnames));