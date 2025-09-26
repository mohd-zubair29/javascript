//For Each


const coding=["cpp", "c", "java", "python", "javascript", "html", "css", "bootstrap"];
/*
coding.forEach( function name (){ //This Is How We Used To Write The Function With defination
    //But Here We Dont required Function Name Here

})

//This Will Help to Print Each item In the Array
coding.forEach(function (eacharrayitems){   //Define The Parameters 
      console.log(eacharrayitems);
})

// OUTPUT=>cpp
// c
// java
// python
// javascript
// html
// css
// bootstrap 



//With The Help Of Arrow functions
coding.forEach((eachitems)=>{
   console.log(eachitems);
})

// OUTPUT=>
//     cpp
// c
// java
// python
// javascript
// html
// css
// bootstrap

*/



//Let Us Take DataBase We Get Each Values In A Objects Inside Objects

let games=[
    {
        gameName:"Grand theft Auto Vice city",
        gameShortcut:"Gta Vc"
    },
    {
        gameName:"God Of War",
        gameShortcut:"GOW",

    },
    {
        gameName:"Play Battle ground",
        gameShortcut:"Pubg"
    },
    {
        gameName:"Skating Game",
        gameShortcut:"SSX Tricks"
    }
]

games.forEach((eachObject)=>{   //This Will Save the Each Objects Key And Values
    console.log(eachObject.gameName)  //This Will Help To Print The Each ObjecT Particular Value with dot operator that are saved In each object
})