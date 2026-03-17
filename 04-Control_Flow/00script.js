// if, else if, else, 
// switch-case, 
// early return pattern 




// if, else if, else - ye decide karta hai ki kaun sa part chalega _______________________________________________

if(condition){    // condition includes truthy or falsy value or case-condition

}
else if(condition){

}
else{

}




// switch-case  ______________________________________________________________________________________________________

switch(value){   // solve hone ke baad  -->> value 2 aaya
    case 1:
        break;   // break lagana jaruri hai, nahi to aage ka bhi sara code cahlega
    case 2:
        console.log("value = 2 hone par ye condition chalega");
        break;
    case 3:
        break;  
    default:  
}





// early return pattern->(isme ham if-else, if-elseif-else ka block nahi banate hain) _________________________________

function getVal(marks){
    if(marks > 90) return "A";
    if(marks > 60 && marks < 50) return "D";
    if(marks < 90 && marks > 60) return "B";
    return "Kam marks"
}
getVal(95);

//Rock-Paper-Scissor ---------------------------------------------
function rps(user, computer){
    if(user === computer) return "draw";

    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";

    return "computer wins";
    
}
console.log(rps("rock", "scissor"));

