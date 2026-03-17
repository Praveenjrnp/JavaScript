// Data Type (means Data ka type) ex: 12, Nick, 2.4 etc. 
// It is of 2 types:------------------------------------

// 1. Primitives  data type -->> Aisi sari values jinko copy karne par hame ek real copy mil jaye.
// ex : string, number, boolean, null, undefned, symbol, bigint

let a = 12;
let b = a; // ye real copy hai
a += 2;



// 2. Refrence Data type -->> Inko copy karne par real copy nahi milegi, but hame refrence milega parent ka.
// ex : arrays [], objects {}, functions ()

let c = [1, 2, 3];
let d = c;  // Ye Refrence hai 'c' ka, real copy nahi hai, matlab 'd' me koi change 'c' me change karega.
c.pop(); 






