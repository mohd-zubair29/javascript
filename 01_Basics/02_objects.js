//Singleton objects

// const instaUser= new Object({
//     name:"zubair",
//     address:"karimnagar"
// });
// console.log(instaUser);


//Non Singleton Objects

// const facebookUser={
//     username:"zubair mohd",
//     date_of_Created:new Date(),
//     origin:"India"
// }
// console.log(facebookUser);                        //Both Work Same As Usual


//This Is The Also A Method To Declatre The Object
// const instauser=new Object()
                                     
// instauser.name="mohammed zubair",
// instauser.email="zubair29@gmail.com",
// instauser.address="karimnagar",
// instauser.state="telangana"

// console.log(instauser);


//Another method of creating objects


/*
const fbUser={
          name:"mohd zubair",
            firstName:"mohd",
           lastName:"zubair",
        email:"mohdzubair@yahoo.in",
       District: "Karimnagar",
        statename:"Telangana",
        countryname:"India"
    }



const newFbAcc={
    name:"affan",
    firstname:"Muhammed",
    lastName:"affan anass",
    email:"affan@gmail.com",
    district:"karimnagar",
    statename:"telangana",
    countryname:"india"
}

const obj2={...fbUser, ...newFbAcc};
console.log(Object.keys(fbUser));      //To Get The Value Of Keys inside the object
console.log(Object.values(fbUser));    //To Get The Value Of Object inside the object
console.log(Object.entries(fbUser));   //Each Key And Value Will Get Save In An Array

console.log(fbUser.hasOwnProperty('statename')); //This Will Help To to find the particular proprtey this will return in a Boolean type
*/

//Objects DeStructuring

const course={
    coursename:"chai Aur code",
    courseInstructor:"Hitesh Chaudhary",
    coursemodules:"javascript basic to advanced",
    coursestate:"Rajasthan"
}
console.log(course);

const {courseInstructor: Instructor}= course   //Amking Shortcut of key to our required name This Method is mostly used in react
console.log(Instructor);    
const {coursestate: instructorState}=course   //now we can use instructorState as key for the object
console.log(instructorState);




//JSON [javascript object Notation Format]
//It Will Be In A Strings Formats


// {
//     "name":"mohd zubair",
//     "district":"Karimnagar",      
//     "state":"Telangana",
//     "Studies":"Bachelors of technology",
//     "college":"nigama Engineering college",
//     "college_place":"Sultanabad Peddapally"
// }

//Some time JSON format Will Be in Array Form

// [

//     {},
//     {},
//     {},
//    {},
// ]