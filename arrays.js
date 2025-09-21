// const arr=[0,1,2,3,4,5,6];
// console.log(arr);

// const myarr= new Array(29,16,7,18,20,17);
// console.log(myarr[4]);


// console.log(myarr.push(29)); //This Will Push The Value In The Array
// console.log(myarr.pop());    //This Will Remove The Value From Array

// console.log(myarr.unshift(33));   //This Will Add The Value In Starting Of An Array
// console.log(myarr.shift());      //This Will Remove The Value From The Array Of Starting Element

//ARRAYS SLICE AND SPLICE

// let arra=[0,1,2,3,4,5];
// console.log(arra);

// console.log("A", arra);
// console.log(arra.slice(0,3));  //This Will Remove the values from 0 to 3 indexes 3 index wont count

// console.log("B", arra);
// console.log(arra.splice(1,2));  //This will Remove The Values from 1 and 2

// console.log(arra);

// const heros=["salman khan", "shahrukh khan", "amair khan", "saif ali khan"];

// const tollyhero=["ram charan", "allu arjun", "mahesh babu", "nani"];

// const allhero=heros.concat(tollyhero);    //This Method Will Concat means Mixes the both given arrays
// console.log(allhero); 

// //there is an another same method that is called as Spread amethod it also work same
// //Taking a glass leaving it from hand it will broke into pieces that is also an example of spread

// const all_heros=[...heros, ...tollyhero];   //this will also work as same as concat
// console.log(all_heros);

const myname='mohammed zubair';
console.log(Array.from(myname));   //This Will convert the array elements into single pieces

const arrOfArr=[1,2,3,4,[6,7,8,0], 3,2,[1,9,3,2], 44, 65,88,76];
console.log(Array.from(myname));     
console.log(arrOfArr.flat());