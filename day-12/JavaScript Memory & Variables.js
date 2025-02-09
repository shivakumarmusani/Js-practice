// 1️⃣ Before Execution
console.log(myVar);   // undefined
console.log(myLet);   // ReferenceError!
console.log(myConst); // ReferenceError!

// 2️⃣ Declarations
var myVar = 10;
let myLet = 20;
const myConst = 30;

// 3️⃣ After Execution
console.log(myVar);   // 10a
console.log(myLet);   // 20
console.log(myConst); // 30

// Stack Example
let a = 10;
let b = a;    // New copy created
a = 20;       // Only 'a' changes

// Heap Example
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;  // Shares same reference
obj1.age = 30;    // Both objects updated
