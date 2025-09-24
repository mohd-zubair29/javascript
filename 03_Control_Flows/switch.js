/*
***************SWITCH STATEMENT***********************************************

const month= 3;
switch(month){
    case 1:
        console.log("January");
      
        case 2:
            console.log("Feburary");
            case 3: 
            console.log("March");
            case 4 : 
            console.log("April");
}

=> output WithOut Break Keyword: January
Feburary
March
April

*/

//**************************SWITCH STATEMENT WITH BREAK KEYWORD*******************************

const day=4;

switch(day){
    case 1:
        console.log("Monday");
       break;
        case 2:
            console.log("Tuesday")
            break;
            case 3: 
            console.log("Wednesday")
             break;
            case 4:
                console.log("Thursday")
            break;
                case 5:
                    console.log("Friday")                  //Output=Thursday =4
                 break;
                case 6:
                    console.log("Saturday")
                    break;
                case 7:
                    console.log("Sunday")   
                    
                    default:
                        console.log("Not A week Day");
                        break;
}