/*
 * Create, access, modify arrays
 * Array methods: push, pop, shift, unshift, splice, slice, reverse, sort  [kuchhBhi.DotKeBaadLikhnePar() -->> method hota hai. like :- arr.push() ]
 * map, filter, reduce, find, some, every (intro level)
 * Destructuring, spread operator
*/


// 🔹 1. Create Array ------------------------------------------------------------------------------
const arrr1 = [10, 20, 30];
const arrr2 = new Array(1, 2, 3);

console.log(arrr1); // [10, 20, 30]
console.log(arrr2); // [1, 2, 3] 




// 🔹 2. Access Array Elements ------------------------------------------------------------------------------
const arrr = [10, 20, 30];

console.log(arrr[0]); // 10
console.log(arrr[1]); // 20
console.log(arrr[2]); // 30




// 🔹 3. Modify Array Elements ------------------------------------------------------------------------------
const arr = [10, 20, 30];

arr[1] = 50;

console.log(arr); // [10, 50, 30]





// 🔹 4. Add Elements (push, unshift)------------------------------------------------------------------------------

const arr = [10, 20];

// Add at end -->> use 'push'
arr.push(30);                         // arr becomes [10, 20, 30]

// Add at start -->> use 'unshift'
arr.unshift(5);

console.log(arr);                     // [5, 10, 20, 30]





// 🔹 5. Remove Elements (pop, shift)------------------------------------------------------------------------------
const arr = [10, 20, 30];

// Remove last -->> use 'pop'
arr.pop();                             // arr becomes [10, 20]

// Remove first -->> use 'shift'
arr.shift();

console.log(arr);                     // [20]




// 🔹 6. Loop Through Array ------------------------------------------------------------------------------
const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//=====================================================================================================================
// 🔹 7. splice() (Add/Remove in middle) ===========================================================
// .splice(startIndex, deleteCount, item1, item2, ...)
// .splice(kaha_se_value_hatani_hai, Kitni_value_hatani_hai, kya_add_karna_hai)  <<<<<============


const arr = [10, 20, 30, 40];
// Remove 1 element from index 1
arr.splice(1, 1);  
// arr becomes [10, 30, 40]

// Add element at index 1
arr.splice(1, 0, 25);
// arr becomes [10, 25, 30, 40]

console.log(arr);




// 🔹 8. slice() (Copy part of array) ==============================================================
// .slice(startIndex, endIndex)
// .slice(kaha_se_copy_start_karna_hai, kaha_tak_copy_karna_hai - end exclusive)


const arr = [10, 20, 30, 40];
const newArr = arr.slice(1, 3);

console.log(newArr); // [20, 30]
console.log(arr);    // original unchanged



//=====================================================================================================================
//=====================================================================================================================




// 🔹 9. reverse() [Order ko reverse me kar deta hai ]-------------------------------------------------------------------
const arr = [10, 20, 30];

arr.reverse();

console.log(arr); // [30, 20, 10]




// 🔹 10. sort() ------------------------------------------------------------------------------
// [Array ko sort karta hai -> Ascending, Decending order me]
// Aur hamesha ye ek 'FUNCTION' leta hai.

const arr = [30, 10, 20];
// Default (string sort ❌)
arr.sort();

console.log(arr); // [10, 20, 30]

// Correct number sort ✔
arr.sort((a, b) => a - b);  // Agar (b - a) karenge to Decending order me sort ho jayega // [30, 20, 10]

console.log(arr); // [10, 20, 30]






