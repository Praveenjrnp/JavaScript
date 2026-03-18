/*
* map, filter, reduce, find, some, every (intro level)
 * Destructuring, spread operator
*/

//=====================================================================================================================
/*
🔥 Key Difference
Feature 	 |  forEach()❌	  |  map() ✔
------------------------------------------------
Return value |  ❌No return	  |  ✔ New array
Use case	 |  Loop only       | Transform data
Chainable	 |  ❌ No	      |  ✔ Yes

 * forEach() -->> sirf tab use karna hai, jab hame array ke har element par kuchh karna hai, lekin hame ek naya array nahi banana hai. Jaise ki, console.log() karna har element ke liye.

 * map() -->> sirf tab use karna hai, jab hame ek naya array banana hai, pichhle array ke data ko use karke. Jaise ki, har element ko 2 se multiply karke ek naya array banana hai.
*/
//=====================================================================================================================













// 🔹 11. map() ------------------------------------------------------------------------------

// map() sirf tab use karna hai, jab hame ek naya array banana hai, pichhle array ke data ko use karke. Jaise ki, har element ko 2 se multiply karke ek naya array banana hai.

// map() dekhte hi sath me, mann me ek blank array bana lena hai

// Kab use karna hai =======> Jab bhi aisa case dikhe ki jaha pe ek array se naya array banega aur wo naya array kuchh values ko rakhega, to map lagega.


let Arr = [11, 62, 4, 5, 25];
let NewArr = Arr.map(function(val){
    return val * 2;
})
console.log(NewArr); // [22, 124, 8, 10, 50]

//-----------------------------------------------
const arr = [1, 2, 3];
const result1 = arr.map(x => x * 2);
console.log(result1); // [2, 4, 6]




// 🔹 12. filter() =================================================================================================
// ye bhi ek naya Array banata hai, aur purane array se kuchh value new array me lata hai

let arrs = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.filter(function(val){
    if(val > 4) return true;
})
console.log(newArr); // [5, 6, 7, 8]


//-----------------------------------------------
const arrr = [1, 2, 3, 4];
const result2 = arrr.filter(x => x % 2 === 0);
console.log(result2); // [2, 4]




// 🔹 13. reduce() ================================================================================================
// reduce means single value me lekar aao, ye baar-baar chalne ke baad bhi apni value ko yaad rakhta hai, aur usme naye value ko add karta hai, aur last me ek single value return karta hai.

let Arr1 = [1, 2, 3, 4];
let sum1 = Arr1.reduce(function(accumulator, val){
    return accumulator + val;
}, 0)
console.log(sum1); // 10


//------------------------------------------------------
const arrr1 = [1, 2, 3, 4];
const sum = arrr1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10




// 🔹 14. find() ================================================================================================
let  Arr2 = [10, 20, 30];
let val = Arr2.find(function(val){
    if(val > 15) return true;
})  
console.log(val); // 20

//--------------------------------------------------
const arrr2 = [10, 20, 30];
const result3 = arrr2.find(x => x > 15);
console.log(result3); // 20




// 🔹 15. some() ================================================================================================
// Agar ekad bhi condition mila to 'true' print ho jayega, ye just check karta hai ki kya condition kisi bhi element ke liye true hai ya nahi, aur uske hisab se true ya false return karta hai.

const arrr3 = [1, 3, 5];
const result4 = arrr3.some(x => x % 2 === 0);
console.log(result4); // false




// 🔹 16. every() ================================================================================================
// ye some() just ulta hota hai, isme sare condition satisfy hone chahiye.

const arrr4 = [2, 4, 6];
const result = arrr4.every(x => x % 2 === 0);
console.log(result); // true




// 🔹 17. Destructuring ================================================================================================
// isme Array se kuchh value nuikal lete hain, aur unko alag-alag variable me store kar lete hain. 

const arrr5 = [10, 20, 30, 40, 50, 60];
const [a, b, c] = arrr5;           // a = 10, b = 20, c = 30
const [e, f, , g] = arrr5;         // e = 10, f = 20, g = 40 (30 ko skip kar diya)
const [x, y, ...rest] = arrr5;     // x = 10, y = 20, rest = [30, 40, 50, 60]
const [p, q, r, s, t, u] = arrr5;  // p = 10, q = 20, r = 30, s = 40, t = 50, u = 60   

let Arrr5 = [...arrr5]; // isse ek naya array ban jayega, jo arrr5 ke elements ko copy karega <<<<<==============

console.log(a); // 10
console.log(b); // 20
console.log(g); // 40
console.log(rest); // [30, 40, 50, 60]



// 🔹 18. Spread Operator ================================================================================================
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4]

/*
🧠 Quick Revision :
 * splice → add/remove middle
 * slice → copy part
 * map/filter/reduce → most important 🔥
 * some/every → boolean check
 * ... → spread / copy

*/