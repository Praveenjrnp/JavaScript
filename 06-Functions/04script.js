// Closures and Lexical Scope
// IIFE
// Hoisting diff b/w declaration & expression


//____________________________________________________________________________________________________________________________

//Closure -->> ek func jo return kare ek aur func AND return hone wala func hameshan use karega parent func ka koi variable, usko closure kehte hain.

function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

abcd()();



//Lexical Scope -->> jab ek func apne parent func ke variable ko access karta hai, to usko lexical scope kehte hain.

function abc(){ 
    let a = 12;
    function def(){
        let b = 10;
        function ghi(){
            console.log(a, b); // Ye func 'ghi' apne parent func 'def' ke variable 'b' ko access kar sakta hai, aur apne grandparent func 'abc' ke variable 'a' ko bhi access kar sakta hai. Isliye isko lexical scope kehte hain.
        }
    }   
    def();
}
abc(); 





//___________________________________________________________________________________________________________________________
// IIFE -->> Immediately Invoked Function Expression, ek aisa function jo declare hote hi execute ho jata hai.

// func banao, par naam mat dena aur use paranthesis se warp kro, aur uske baad bhi paranthesis() lagake, turant call kar do, yhi IIFE hai.

(function(){
    console.log("hello");
})(); // Output: hello (the function is defined and immediately invoked)


//____________________________________________________________________________________________________________________________
// Hoisting diff b/w declaration & expression ------------------------------------------------------
// func declaration me ye work karta hai lekin agar func ko expression bana duiya to work nahi karega.
  


dcba(); // Output: hello (function declarations are hoisted, so this works) Aur ye sirf JAVASCRIPT me hota hai, dusre programming languages me aisa nahi hota hai.

// declaration ----------------->>>>>>>>>>>>>>>>>>>>>>>>>>
function dcba(){   // Function declaration is hoisted, so it can be called before its definition.
    console.log("hello");
}



// expression  ------------------>>>>>>>>>>>>>>>>>>>>>>>>>>
dcba1(); // Output: Uncaught ReferenceError: Cannot access 'dcba1' before initialization (function expressions are not hoisted, so this will throw an error)

let dcba1 = function(){
    console.log("hello");
};
dcba1();
