/*
1. Write a BMI calculatror 
2. create a reusable discount calculator (HOF) 
3. Build a counter using clouser 
4. c reate a pure function to transform a value, 
5. Use IIFE to isolate variables.
*/

// 1. Write a BMI calculatror -----------------------------------------------------

function bmiCalculator(weight, height) {
    return weight / (height * height);
}
console.log(bmiCalculator(65, 1.8)); // 20.061728395061728
console.log(bmiCalculator(65, 1.8).toFixed(4)); // 20.0617





// 2. Reusable Discount Calculator (HOF) --------------------------------------------
function discountCalculator(discount) {
    return function(price) {
        return price - (price * discount / 100);
    };
}
const tenPercent = discountCalculator(10);

console.log(tenPercent(1000)); // 900
console.log(tenPercent(500));  // 450


// 3. Counter using Closure ---------------------------------------------------------
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2



// 4. Pure Function (Transform Value) ---------------------------------------------
function doubleValue(num) {
    return num * 2;
}

console.log(doubleValue(5));  // 10
console.log(doubleValue(10)); // 20



// 5. IIFE (Isolate Variables) -------------------------------------------------------------
(function() {
    let message = "Hello World";
    console.log(message);
})();

// console.log(message); ❌ Error (not accessible)






