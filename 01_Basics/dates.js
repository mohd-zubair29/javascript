// const mydate=new Date();    //This Will Give The Todays Date
// console.log(mydate);     //This Will print the Avove variable
// console.log(mydate.toDateString());  // This Convert The Date String
// console.log(mydate.toLocaleString());  //This will Give The Local Date Type of Indian
// console.log(mydate.toJSON()); 
// console.log(mydate.toLocaleDateString());  //Local Indian Date Type


let mydate=new Date();
console.log(mydate.toLocaleString());


let anotherday=new Date(2025, 0, 29);
console.log(anotherday.toDateString());

//TIME 

let newtime=new Date()               //This Will Give The Exact Date And Time
console.log(newtime.toTimeString());