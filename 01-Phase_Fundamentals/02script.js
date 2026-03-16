// Temporal Dead Zone (TDZ) - ('let' aur 'const' ke sath hota hai) ('var' ke sath Hoisting hota hai)

/*
 JavaScript me TDZ wo time period hota hai jab variable declare ho chuka hota hai, lekin initialize nahi hua hota.
 Is time me agar variable access karte ho to error aata hai.
 Ye mainly let aur const ke saath hota hai.
*/

console.log(a); // Name pahle puchh rhe hain, abhi naamkaran nahi hua hai, isliye error aayega TDZ.
               // Ye in dono line ke bich ka area TDZ kehlata hai, jaha variable declare ho chuka hota hai, lekin initialize nahi hua hota.
let a = 10; // baad me name rakh rhe hain 



// but with Var ----------------------------------------------------------------------
console.log(a1);
var a1 = 10;
// Output: undefined (Kyuki var hoist ho jata hai aur undefined assign ho jata hai.)





// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Hoisting impact per type
// hoisting -->>ek variable ko jab JS me banate hain to variable do hisso me toot jata hai and uska declare part upar chala jata hai and uska initialization part neeche rah jata hai.
// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var a2 = 12; // kuchh is tarah se divide hota hai >>>>

var a2 = undefined;  // declare part
a2 = 12;             // initialization part

// isliye agar hum a2 ko access karte hain to output undefined aayega, kyuki var hoist ho jata hai aur undefined assign ho jata hai, aur baad me usko 12 assign kiya jata hai.






// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Hoistiong sbme hoti hai, Internet pe kafi controvercial topic hai, leking hoisting lagbhag sabme hoti hai.
// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
console.log(a3); // ReferenceError: Cannot access 'a3' before initialization (TDZ ke karan error aayega)
let a3 = 12; 

// Now let understand this , It never says that [Cannot access 'a3' before Declaration] 
// it always says [Cannot access 'a3' before initialization] 
// because TDZ me variable declare ho chuka hota hai, lekin initialize nahi hua hota, isliye error aata hai. so-->>>>>>>>>>>>

let a4 = undefined; // declare part
console.log(a4); 
let a4 = 12; // initialization part
