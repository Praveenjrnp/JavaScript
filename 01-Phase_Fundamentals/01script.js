// Scope (global, block, functional)

// ---------------------------------------------------------------------------------------
function abcd() {
    var a = 12; // function scope
}



// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
var a = 12; // global scope

function abcd() {
    console.log(a); // can access global variable inside function
}
abcd();
function efgh() {
    console.log(a); // can access global variable inside function
}
efgh();



// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// {} ke andar jo bhi variable declare karenge wo block scope me aayega, but var is not block scoped 
{
    var b = 12; // block scope but var is not block scoped, it is function scoped, so it will be accessible outside the block as well
    let c = 12; // block scope
    const d = 12; // block scope
}


//______________________________________________________________________________________________________________________________________________________________________________________________________________________
//Re-assignment(or Updation) & Re-declaration
//_____________________________________________________________________________________________________________________________________________________________________________________________________________________
var x = 12; // declaration and initialization
var x = 13; // redeclaration allowed  ==>> Re-declare hamesh 'Keywords' se hota hai (exp:- var, let, const)
x = 14; // reassignment allowed or updation allowed

let y = 12; // declaration and initialization
// let y = 13; // redeclaration not allowed, error aayega
y = 14; // reassignment allowed

