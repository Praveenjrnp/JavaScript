// Arithmetic, comparison, logical, assignment, unary, ternary
// typeof, instanceof

/*

+, -, *, %, **
=, ==, ===
<, >, <=, >=, !, !=, !==, !!
&&, ||
?:

*/

// Arithmetic (+, -, /, *, %, **) ----------------------------------------------------------------

1 + 2 = 3
"Nick" + "Kumar" = "NickKumar"

12 - 2 = 10

12/6 = 2

12*2 = 24

12%5 = 2

2 ** 3 = 8



// Comparison (=, ==, ===, !=, !==, <, >, <=, >=) -----------------------------------------------
 
'=' means value dalna (assignment operator)
let a = 12;

'==' sirf value check karta hai, unka data type nahi, this is the problem with it. NOT STRICT COMPARISON
12 == 13    // false
12 == "12"  // true

'===' ye proper data rype ko bhi check karfta haI. STRICT COMPARISON
12 === "12" // false

'!=' not-equal. NOT STRICT COMPARISON
12 != 13    // true 
12 != "12"  // flase

'!==' not -equal. STRICT COMPARISON
12 !== "12" // true
12 != "12"  // flase

'>, <, >=, <=' 
22 > 22     // false
22 < 22     // false
22 >= 22    // true
22 <= 22    // true





// logical (&&, ||, !) ---------------------------------------------------------------------------
// && - AND, || - OR, ! - NOT

// assignment (=, +=, -=, *=, /=, %=) ------------------------------------------------------------



// unary operator (+, -, typeof, ++, --) -----------------------------------------------------------------------
"5"       //Output : "5" - String
+"5"      //Outpur : 5 - Number
+"nick"   //Output : NaN
-5        //output : -5

12        //Output : true
!12       //Output : false

typeof 12  //Output : number

let b = 12;
++b       //Output : 13  (Pre-Increment : Pahle increse krega, then print)

let c = 15;
c++       //Output : 15  (Post-Increament : pahle value likhega, then next time pe value increse karega)
c         //Output : 16


let b1 = 12;
--b1       //Output : 11  (Pre-Decrement : Pahle decrese krega, then print)

let c1 = 15;
c1--       //Output : 15  (Post-Decreament : pahle value likhega, then next time pe value decrese karega)
c1         //Output : 14





// ternary (? :) ----------------------------------------------------------------------------------------------------
// condition ? true hone ka code : false hone ka code

12 > 14 ? console.log("true") : console.log("false");   //Output : false





//_______________________________________________________________________________________________________________________
// typeof & instanceof -------------------------------------------------------------------------------------

typeof null          //'object'
typeof []            //'object'
typeof {}            //'object'
typeof function(){}  //'function'
typeof NaN           //'number'


// {Variable} instanceof {Parent ya jisse related hai}  Aur ye hamesha Refrence Data Types([], {}, func()) ke sath kaam karta hau 

let x = [] // x instanceof Array : true
let y = {} // y instanceof Object : true   AND   x instanceof Object : false 







