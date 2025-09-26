const lang={
   js : "Javascript",
   Cpp: "C++",
   E: "Express.js", 
   rb:"ruby",
   swift: "Swift By apple"
}

//Here We Have To Use The For In Loops
// It Is Some What Different From For Of Loop


for (const lan in lang){
    // console.log(`${lan} FullForm Is ${lang[lan]}`) //This Will Print The Each Element of object
}


//For In For Loops
let programming=["javascript", "html", "css", "mysql", "mongodb", "bootstrap", "cloudinary"];

for (const each in programming){          //Programming will have All The Arrays elements each variable Will Have Each Elements of Array
    // console.log(`Programming Languages Are ${programming[each]}`)  //programming => array each=> each element from programming array
}

//For Arrays We Use For Of Loops
//For Objects We Use For In Loops
