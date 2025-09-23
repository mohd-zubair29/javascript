function one(){
    console.log("This Is The First Function Hello");
     const user="zubair";

     function two(){
        const newuser="Mohammed";
       console.log(`This Is The Second Function Call ${user}`);
       

     }
     
     two();
}

// one()

/*
if(true){
    const username="zubair";
    if(username=="zubair"){
        const name="instauser";
        const another= username + name;

    }                                         
   console.log(another);             //Here We are Trying to access the localscope outside the scope
}
console.log(username);               //Here Also The Same We Are Trying Local scope to global scope
*/

/*
if(true){
    const username="zubair";
    if(username=="zubair"){
        const name="instauser";
        const another= username + name;
console.log(another);                           //Accessing the Local scope inside the scope
    }                                         //This Is The Correct Way To Write the Local And Global Scope
   console.log(username);              //Here also Same Accessing the local scope in its scope
}
*/


function addten(num){
    return num+10;        //Return will only return the value it wont print
}

// console.log(addten(5));


console.log(addtwo(9));
let addtwo= function(num){     //This Is Also The Method Using Variables
    return num+2;              //
}

