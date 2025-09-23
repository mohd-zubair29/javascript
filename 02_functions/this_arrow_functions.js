
/*  
********************THIS KEYWORD******************************************************************************************
const user={
    username:"zubair",
    shopping:"Jeans pants",
    price:999,

    usermessage: function(){
        console.log(`The Message From ${this.username} Is Can I Get A Discount`) //This Give The Current Context 
    }
}

user.usermessage();   //This Will Print The Above UserMessage Function 
user.username="Mohd Zubair";  //we Are Changing The Value of user
user.usermessage()     //This Will send The Current Context
console.log(this); //This Give the Current Window Objects
*************************************************************************************************************************
*/

//Normal Function
// const addone=function(num1, num2){
//     return num1+ num2
// }

// console.log(addone(5,5));


const addtwo= (num1, num2)=>{       //Arrow Functions
    return num1+num2
}

//console.log(addtwo(2,5));  //Calling Arrow Function

const threenum= (num1, num2, num3)=>(num1+ num2+ num3);  //No Need To Write The Return Keyword Here

// console.log(threenum(7,5,10));  

//In Arrow Functions We Cant Use The This Keyword

//If We Want To Send The Object From arrow Function

const tv= (serials)=>({Channel:"Colours"});



const tv1={
    channel:"serials"
}

console.log(tv(tv1));
