// Function declaration, expression and arrow function

// function : What, Why, How

// What is a function?
// A function is a reusable block of code that performs a specific task. It can take input, process it, and return an output.
// Function se ek fayada ye bhi hai ki jab ham chahenge tab hi hi code chaloega, jab ham call karenge. -------------------------

// Why use functions?
// 1. Reusability: Functions allow you to reuse code, which can save time and reduce errors.
// 2. Modularity: Functions help break down complex problems into smaller, more manageable pieces.
// 3. Readability: Functions can make your code more readable and easier to understand.


// How to declare a function?
// There are three main ways to declare a function in JavaScript: function declaration, function expression, and arrow function.    




// 1. Function Declaration ---------------------------------------------------------------------------------------------

/*
function abcd(parameters) {
    // function body
    // return statement (optional)
}
*/


function greet(name) {
    return `Hello, ${name}!`;
}    
greet("Alice"); // Output: Hello, Alice!   



// 2. Function Expression ----------------------------------------------------------------------------------------------
let fnc = function(name) {   // Kisi variable me function ko store karna, usko function expression kehte hain.
    console.log(`hello ${name}! Good morning!`);
};
fnc("Bob"); // Output: hello Bob! Good morning!



// 3. Arrow Function [  fat arrow function ()=>  ]--------------------------------------------------------------------------
/*
let fnc1 = (parameters) => {
    // function body
    // return statement (optional)
}   
*/

let fnc1 = () => {
    console.log("nick");
};
fnc1(); // Output: nick


//__________________________________________________________________________________________________________________________

function add(a, b) {
    console.log(a + b);
}
add(5, 10); // Output: 15
    



