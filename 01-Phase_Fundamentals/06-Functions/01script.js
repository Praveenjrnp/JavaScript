// Default, rest and spread operators

// Default parameters -_________________________________________________________________________________________________

function add(a, b) {
    console.log(a + b);
}
add(a, b); // Output: NaN (Not a Number) because a and b are undefined
add(5); // Output: NaN because b is undefined
add(5, 10); // Output: 15

// by-default ----------------------------------------------------------
function add(a = 0, b = 0) {   // Default values for a and b are set to 0 & a=0, b=0 is called default parameters.
    console.log(a + b);
}   
add(); // Output: 0 because both a and b default to 0q


//------------------------------------------------------------------------
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!



// rest parameters(...numbers) __________________________________________________________________________________________
// agar triple dots (...), 'function' ke 'parameter' space me lage to 'Rest operator' aur 'Array' ya 'Objects' me lage to 'Spreasd opertator' kahte.
//_________________________________________________________________________________________________________________________

//jab hamare paas kai sare arguments ho, to hame utne hi parameters banane padenge, isse bachne ke liye 'Rest parameters' ka use karte hain.

/*
function sum(...numbers) {   // rest parameter syntax (three dots ... followed by the parameter name).
    return numbers.reduce((total, num) => total + num, 0);
}
*/

function ancd(...val){
    console.log(val);
    
}
ancd(1, 2, 3, 4, 5, 6); // Output: [1, 2, 3, 4, 5, 6] (rest parameters are collected into an array)


function ancd1(a,b,c, ...val){
    console.log(a, b, c, val);
    
}
ancd1(1, 2, 3, 4, 5, 6); // Output: 1 2 3 [4, 5, 6] 





// Que : Use Rest parameter to accept any number of scores and return the total.======================================
function getScores(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;

}
console.log(getScores(10, 12, 14, 18));

