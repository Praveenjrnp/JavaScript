// var(ES5), let(ES6), const(ES6) - line-by-line comparison

// a = 12;
// var a;
// var a = 12;

// let a;
// let a = 12;

// const a = 12;


// Declarations & Initialization ----------------------------------------------------------
var a; // declaration
var a = 12; // initialization

let b; // declaration but only use in block scope
let b1 = 12; // initialization , common practice is to declare and initialize in the same line

const c = 12; // declaration and initialization must be in the same line, and value cannot be changed later

//-------------------------------------------------------------------------------------
var a = 12;
// window me add hota hai
// function scoped hota hai
// fir se declare kar sakte hai, aur reassign bhi kar sakte hai, erro nhi aayega
var a = 13; // redeclaration allowed
a = 14; // reassignment allowed

//--------------------------------------------------------------------------------------
let b2 = 12;
// block scoped hota hai
// reassign kar sakte hai, but redeclare nhi kar sakte hai, error aayega

//----------------------------------------------------------------------------------
const c1 = 12;
// block scoped hota hai, aur ham iske value ko change nhi kar sakte hai, aur redeclare bhi nhi kar sakte hai, error aayega







