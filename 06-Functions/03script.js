// First Class functions(assign to variables, pass as arguments, return from other functions)
// first class function -->> functions ko values ki tahatr treat kar sakte hain


let abc = function() {   
    // code    
}
abc();


//--------------------------------------------------------
function abc1(val) {    // val = 12
    // code    
}
abc1(12);

//--------------------------------------------------------
function abc2(val) {   
    val();   
}
abc2(function(){
    console.log("hey");
    
});




//___________________________________________________________________________________________________________________________
// High Order Function -->>
// HOFs aisa function hota hai jo ya to dusre function ko return karta hai 
// ya fir accept kare ek function apne parameter me.


function abcd(val) {   // Ye func 'HOF' hai kyunki ye ek function ko accept karta hai apne parameter me aur usko call karta hai.
    val();   
}
abcd(function(){
    //code
});


function abcd1(val) {   
    return function() {   // Ye func 'HOF' hai kyunki ye ek function ko return karta hai.
        console.log("hello");
    }  
}
abcd1()(); // Output: hello (the first set of parentheses calls abcd1, which returns a function, and the second set of parentheses calls that returned function)





//___________________________________________________________________________________________________________________________

//Pure vs Impure functions -->>

// aisa func jo ki bahar ki value ko na badle, wo hai Pure func
let  a = 10;
function abc2() {   
   console.log(a);// Ye func 'Pure' hai kyunki ye bahar ki value 'a' ko badal nahi raha hai, bas uska use kar raha hai.
}




// aisa func jo bahar ki value ko badfal de wo hai Impure func
function abc3() {   
    a++;
    console.log(a); // Ye func 'Impure' hai kyunki ye bahar ki value 'a' ko badal raha hai.
}


