//Singleton


//objects literals

let jsuser={
    name:"zubair",
    address:"Karimnagar",
    state:"Telangana",
    education:"Btech",
    email:"zubair@google.com",
    fullName:"Mohammed Zubair",
    "college":"Nigama college",   //This Is also a way to write it but we cant use the dot operator after 
}

// console.log(jsuser); //this will give the whole object with its key and values

// console.log(jsuser.email); //dot operator is used in objects to get particular data
// console.log(jsuser["college"]); //In some cases we use like this because we dont have any options
// console.log(jsuser.name);
// jsuser.name="Mohd zubair"  //To Change The value Inside the object
// console.log(jsuser.name="mohd zubair");
 

// Object.freeze(jsuser);     //After using this method We Cant rewrite to the object

// jsuser.email="zubzubair29@gmail.com";
// console.log(jsuser);               //To print the object


jsuser.greeting=function(){
    console.log("Hello Javascript User");
}
jsuser.greeting2=function(){
    console.log(`hello javascript user ${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
console.log(jsuser);