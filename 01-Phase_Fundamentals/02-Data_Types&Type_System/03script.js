// Dynamic typing  
// JS me Ststic typing nahin hai, yha par hai Dynamic typing, 
// jiska matlab hai ki ham Data ko change kar sakte hain, qki yha par Dynamic typing hai


//--------- In other programming languages----------
int a = 12;
a = true;   // Wrong 'a' pahle se hi 'int' hai to ise 'boolean' nahi kar skte

//----------- But in JavaScript ----------------------
let a = 12; //integer  // becoz let hai.. means maan liya hai ki a = 12 hai
a = true; //boolean
a = "nick" // string
a = [] // array - refrence
a = null;
a = undefined




//________________________________________________________________________________________


// typeof quirks (e.g. typeof null === 'object')
//  kisi bhi chij ka type check krte hai

typeof 12    // number
typeof null  // object
typeof NaN   // number  (Nan => Not a Number)
typeof undefined // undefined

Nan === NaN  // false


[] + []      // ''
1 + "1"      // '11'



