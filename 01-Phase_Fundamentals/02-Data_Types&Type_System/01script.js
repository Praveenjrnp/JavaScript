// string, number, boolean, null, undefned, symbol, bigint



// Strings ----------------------------------
// '' - single quotes
// "" - double quotes
// `` - backticks

// Numbers ----------------------------------
// 12 - number
// 12.4 - number


// Boolean ----------------------------------
// true or false
let a = true;
let b = false;


// Null  ------------------------------------
// iska matlab hai ki jaan-boojh kar value nahi diya.
let selectedStudents = null; // future me jake isme value aayegi, aage jkake pata chalegi.


// Undefined ----------------------------------
// iska matlab hai ki hamne ek variable banaya aur use vale nahi di, to jo value By Default milegi wo hai 'undefined'

let c; //undefined


//_________________________________________________________________________________________
// Symbols ----------------------------------
// Unique immutable value hoti hain

// future me ham koi libraries use karenge, ab is case me un libraries me kai baar kuchh fields hoti hai jinse similar ham bhi bana dete hain aur galti se hamari banayi huyi fields us library ki original field ko change kar dta hai.

let shreyjs = { // Like ye Library hai
    uid : 12,   // aur uid ki value hamare banaye huye fields ki vajah se '1' set ho jayegi (override), jo '12' hona expected tha.
    model : "nick"
}

shreyjs.uid = 1; // hamari banayi huyi field

//------------------ way to use Symbol---------------------------------------
let u1 = Symbol("uid");
let u2 = Symbol("uid");  // u1 === u2 >> false


let obj = {
    uid : 1,
    name : "nick",
    age : 21
}
let v1 = Symbol("uid");
obj[v1] = "001";        //{uid: 1, name: 'nick', age: 21, Symbol(uid): '001'}


// Bigint _____________________________________________________________________________
// Number.MAX_SAFE_INTEGER >> 9007199254740991 (isse bade num ke liye 'bigint' use karenge)
// bigint banane ke liye number ke last just 'n' likhne se vo num 'bigint' hoi jata hai

let num = 9007199254740991n;
num += 5n;  //9007199254740996n



