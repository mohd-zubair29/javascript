//For Loops

/*    
Initialization Value;number required value; number ++
for (let index=0; index <= 10; index++){  //Isme Ke Sab Sirf Isme Ich Rahate Scope Mai Khatam Hojate
    const element=index;

    console.log(element);    
}

console.log(element);  //We Cant Access The Element Variable Because It Is In A Block Scope


for (let i=1; i<=10; i++){
    console.log(`This Is The Outer Loop ${i}`);   //If 1 then it goes to inner loop after completion then goes to again outer loop
    for(let j=1; j<=10; j++){
        console.log( i + 'X' + j + '=' + i*j); //This Will Print The Inner Loop
    }
}




let myArr=["Zubair", "Simran", "Sameena", "Summaiyya", "Ali", "Asiya", "Ahmed"];

for(let i=0; i<myArr.length; i++){           
   const element= myArr[i];
   console.log(element);
}

Output=>Zubair
Simran
Sameena
Summaiyya
Ali
Asiya
Ahmed



//For loop With If Statements

for (let i=1; i <= 20; i++){
    const element=i;
    if(i == 5){                        //If Loop Come To 5 Then 
        console.log("Detected 5 Here")   //When I == 5 then Print This Line
    }
    console.log(`The Index Value Is ${element}`)
}

//For Loops With If And Break,Continue Keywords

for (let i=1; i <= 10; i++){
    const element=i;
    if(element == 3){     //When i==3 Then We Want To Break The Loop and Come IOut Of The Loop
        console.log("3 Is Detected Here Break The Loop Now")    
        break;      //This Is Used To Break The Loop Or Come Out From The Loop //band karo
    } 
    console.log(element);
}
//For Loop With If And Contiue Keyword

for(let j=1; j<=12; j++){
    const element=j;
    if(element == 4){     //Only Once Print this Exempt the again printing of value
        console.log("Here Is 4");  //Ek condition ko skip karo or Skip karo
        continue;
    }
    console.log(`The Value Is ${element}`)
}

*/

