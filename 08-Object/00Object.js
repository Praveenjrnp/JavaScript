// Object : Ye tab create karte hain, jab hame ek entity ke bare me puri jankari chahiye hoti hai.
// * Jab ham ek hi chij ke baare me detail chahiye to "object" ka use karte hain, aur jab ham ek chij ke baare me sirf list chahiye hoti hai to "array" ka use karte hain.
// * means Ek bande ki baat krenge to "object" AND kayi bandon ki baat krenge to "array" ka use karenge.
// * Object me data ko key-value pair ke form me store karte hain, jaha pe key ek string hoti hai, aur value kisi bhi type ki ho sakti hai.


/*
 1. Key-value structure
 2. Dot vs bracket notation
 3. Nesting and deep access
 4. Object destructuring
 5. Looping: for-in, Object.keys, Object.entrie
 6. Copying objects: spread, Object.assign, deep clone
 7. Optional chaining, computed properties
*/





// 1. & 2. Object creation[ let obj = {};  ]============================================================================================
// Object literal syntax----------------------[ Key-value structure, Dot vs bracket notation]


let obj = {
    // Key-value pair (key = name & value = "John")
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com"
};
obj.name;   // "John"

// Dot vs bracket notation
obj["age"]; // 30 
obj['age']; // 30
obj.age;    // 30  ===>>  Dot notation (obj.age) direct "age" key ko access karta hai, jabki bracket notation (obj[abc]) variable ke value ko use karke key access karta hai; isliye obj.abc undefined deta hai, par obj[abc] correct value deta hai. jaise [let abc = "age"; obj[abc]; // 30]  <<<<<=============

obj["city"]; // "New York"



//========================================================================================================================
// Object constructor syntax  --------------------------------------------------------------------       
let obj2 = new Object();
obj2.name = "Alice";
obj2.age = 25;
obj2.city = "Los Angeles";



//========================================================================================================================
// 3. & 4. Nesting and deep access & Object Destructuring --------------------------------------
const user = {
    name : "nick",
    address : {
        pin : 21101,
        location : {
            lat : 23.2,
            lng : 77.4
        }
    }
}
// Nesting and deep access
user.address.location.lng; // 77.4
user.address.location.lat; // 23.2

//        OR
let {lat, lng} = user.address.location; // Object destructuring
console.log(lat); // 23.2
console.log(lng); // 77.4






//========================================================================================================================
// 5. Looping: for-in, Object.keys, Object.entrie
let obj1 = {
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com"
};

// for-in loop --------------------------------------------------------------
for (let key in obj1) {        // Har baar value 'key' andar hi aayegi, agar iska name ham 'Chacha' kar de, to 'Chacha' me value aayegi.
    console.log(key, obj1[key]); // Output : name Nick, age 21, email abcd@gmail.com
}

// Object.keys() ------------------------------------------------------------

// Object.keys('obj1);  //['name', 'age', 'email']   Object keys ka Array bana deta hai
Object.keys(obj1).forEach(key => {
    console.log(key, obj1[key]);
});



// Object.entries() ----------------------------------------------------------
Object.entries(obj1).forEach(([key, value]) => {
    console.log(key, value);
})



/*
// Object.entries(obj1);

Output: 
3) [Array(2), Array(2), Array(2)]

Array(2)
0 : "name"
1 : "Nick"
length : 2 [[Prototype]]
Array(2)
0 : "age"
1 : 21
length : 2 [[Prototype]]
Array(2)
0 : "email"
1 : "abcd@gmail.com"
length : 2 [[Prototype]]



*/




//========================================================================================================================
// 6. Copying objects: spread, Object.assign, deep clone
 
// spread ----------------------------------------------------------------
let obj12 = {
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com"

};
let obj3 = {...obj12};
console.log(obj3);      // {name: 'Nick', age: 21, email: 'abcd@gmail.com'}


// Object.assign [ye bhi copy karne ke kaam hi aata hai]--------------------
let obj2 = {
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com"

};
let obj4 = Object.assign({}, obj2);   // same chij 'spread operator' se ho jata hai
console.log(obj4);      // {name: 'Nick', age: 21, email: 'abcd@gmail.com'}

let obj5 = Object.assign({price : Infinity}, obj2); 
console.log(obj5);      // {price: Infinity, name: 'Nick', age: 21, email: 'abcd@gmail.com'}



// Deep clone ---------------------------------------------------------------
let obj6 = {
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com",
    address : {
        city : "Delhi",
    },

};
let obj8 = JSON.stringify(obj6);
console.log(obj8); // {"name":"Nick","age":21,"email":"abcd@gmail.com","address":{"city":"Delhi"}}  //Ye real-copy bana hai, 'string' ke format me

obj6.address.city = "Lucknow";
console.log(obj8);   // isme city "Delhi" hi rahega
console.log(obj6);   // isme city "Lucknow" ho jayega

// ise "string" se vapas pahle jaisa pane ke liye -------------
let obj9 = JSON.partse(JSON.stringify(obj6));
console.log(obj9);


//-----------------------------------------------------

let obj7 = {...obj6}
obj6.address.city = "Lucknow";

console.log(obj7); // Output : {name: 'Nick', age: 21, email: 'abcd@gmail.com', address: {city : Lucknow}}
console.log(obj6); // Output : {name: 'Nick', age: 21, email: 'abcd@gmail.com', address: {city : Lucknow}}  //isme bhi value change kar diya hai, 'spread operator ne'





//========================================================================================================================
// 7. Optional chaining, computed properties

// Optional chaining ------------------------------------
let objj = {
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com",
    address1111 : {
        city : "Delhi",
    },
};

objj?.address1111?.city    // undefined (ye optional hota hai, agr value exist karta hai toi de dega, nahi to "error nahi dega"


// computed properties ---------------------------------

let role = "admin";

let objj1 = {
    name: "Nick",           
    age: 21,
    email : "abcd@gmail.com",
    address1111 : {
        city : "Delhi",
    },
    [role] : "Nick",
};
console.log(objj1);  // {name: 'Nick', age: 21, email: 'abcd@gmail.com', address1111: {…}, admin: 'Nick'}









//========================================================================================================================






