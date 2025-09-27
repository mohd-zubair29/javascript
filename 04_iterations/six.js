let mynames=["zubair", "affan", "anas", "saketh", "shivin", "sajal", "mudit"];

const herenames= mynames.forEach((eachnames)=>{
    //console.log(eachnames);                           //In Future If we want Any Ones Value Then What We Have To do so
            //We Cant Put any Conditions Here
 
})                           


//Arrow Function
const ourname= mynames.filter((eachnames)=> eachnames=="fahad");  //Empty Array Will Be  Output If Entered Any Not Existing Name
// console.log(ourname)  

const newarr=[1, 2 , 3 , 4 ,5 , 6 , 7, 8 ,9 , 10];

 const anarr= newarr.filter((nums)=>{
   return nums > 5
    
})
// console.log(anarr);


const hotels=[  //An example Array With Objects 
    {hotelName:"Mytri Hotel", onlinebooking:"OYO",facilities:"1Bhk", yearEstablishment:1990},
    {hotelName:"sri Krupa", onlinebooking:"Airbnb",facilities:"2Bhk", yearEstablishment:1994},
    {hotelName:"Nawabs", onlinebooking:"Third-Party",facilities:"2Bhk", yearEstablishment:1996},
    {hotelName:"kritunga", onlinebooking:"OYO", facilities:"2Bhk", yearEstablishment:2000},
    {hotelName:"super cool", onlinebooking:"OYO", facilities:"Couples private Rooms", yearEstablishment:2020}
]

// console.log(hotels);

 const newhotel = hotels.filter( (eachhoteldetails)=>(eachhoteldetails.onlinebooking==="OYO"))  //To Get Each Value This will Be Very Useful When Retriving Data from the database
// console.log(newhotel);

const newmansoin= hotels.filter( (eachhotel)=>{
 return  eachhotel.facilities=="2Bhk"   && eachhotel.onlinebooking=="OYO"           
    //For Single value                                 //For SCOPE/Objects Its Compulsory To write Return Keyword
})                                //Without return keyword it is showing an empty array
console.log(newmansoin)