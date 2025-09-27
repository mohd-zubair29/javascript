//MAP Method

const mynums=[1,2,3,4,5,6,7,8,9,10];

const annums= mynums.map((nums)=>nums+20);    //Without Scope It Will Directly Return The Value

const newnums=mynums.map((eachnum)=>{
    return eachnum+25;      //Map Is Easy Method
})

// console.log(annums);
// console.log(newnums);

//Using Multiple Maps And Filter Method

const anonum= mynums.map((num)=> num *10)  //This Will Multiply the Elements In array    //Numbers in array will get multiplied
                 .map((num)=> num +2)       
                                          //OUTPUT=>[ 12, 22, 32, 42,  52,62, 72, 82, 92, 102]                       //After Multiplied The numbers Will Be Saved In Array That Save Will Be Used By This Another Method
             .filter((num)=> num > 50)  //OUTPUT=> [ 52, 62, 72, 82, 92, 102 ]

             console.log(anonum);