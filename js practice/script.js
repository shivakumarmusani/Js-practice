// Artimatic Operators
// let a = 5;
// let b = 2;
// let c = a + b;
// console.log("a + b", c); // a+b 7
// console.log("a + b", a + b); //a+b 7
// console.log("a = ", a, " & b = ", b); // a = 5 & b = 2
// console.log("a + b = ", a + b); // a+b = 7
// console.log("a - b =", a - b); // a-b = 3
// console.log("a * b = ", a * b); // a*b = 10
// console.log("a / b =", a / b); // a/b = 2.5
// console.log("a % b =", a % b); // a%b = 1
// console.log("a ** b =", a ** b); // a**b = 25 (5^2 or 5*5 =25)

// Unary Operator
//a = a + 1; // 6
//console.log("a = ", a);
//a++; // 5(final Ans = 6)
// console.log("a++ = ", a++); // first print 5 after print 6
// console.log("a = ", a); //6
//++a; // 6
//console.log("++a = ", ++a); //6
//a = a-1; // 4
//console.log("a = ",a);
//a--; // 5(final Ans = 4)
// console.log("a-- = ", a--); // first print 5 after print 4
// console.log("a = ", a);
// --a; //4
// console.log("--a = ", --a);
 
// Assugnment Operators
//a += 4; //a = a + 4 // 9
//console.log("a = ", a);
// a -= 4; //a = a - 4 // 1
// console.log("a = ", a);
//a *= 4; // a = a * 4 //20
//console.log("a = ", a); //20
// a /= 4; // a = a / 4 (5/4 = 1.25)
// console.log("a = ", a);
// a **= 4; // a = a ** 4
// console.log("a = ", a);

// Comparison Operators
// let a = 5;
// let b = 2;
// console.log("a == b", a == b); // false
// console.log("a != b", a != b); // true
// let a = 5;
// let b = 5;
// console.log("a == b", a == b); // true
// console.log("a != b", a != b); // fasle
// let a = 5; // number
// let b = "5"; // string -> number
// console.log("a == b", a == b); // true
// console.log("a === b", a === b); // false
// console.log("a !== b", a !== b); // true
// let a = 5;
// let b = 3;
// console.log("5 > 3", a > b); // or console.log("a > b", a > b); // true
// console.log("a < b", a < b); // false
// let a = 5;
// let b = 5;
// console.log("a <= b", a <= b); // true
// console.log("a >= b", a >= b); // true
// let a = 6;
// let b = 5;
// // console.log("6 >= 5", a >= b); // or console.log("a >= b", a >= b); // true

// Logical Operators
// let cond1 = a > b; // true
// let cond2 = a === 6; // true
// console.log("cond1 && cond2", cond1 && cond2); // true
// let cond1 = a < b; // false
// let cond2 = a === 6; // true
// console.log("cond1 && cond2 = ", cond1 && cond2); // false
// console.log("cond1 && cond2 =", a < b && a === 6); // false ( f && t = f)
// console.log("cond1 || cond2 = ", a < b || a === 6); // true (f || t = t)
// console.log("!(cond1 < cond2) = ", !(a < b)); //true (false oppite true)
// console.log("!(6 < 5) = ", !(a < b)); //true (false oppite true)
// console.log("!(6 < 5) =", !(a === 6)); // false (but Ans = true)

// Conditional Statements
// let age = 18;
// if (age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you CONNOT vote");
// }

// let mode = "dark";
// let color;
// if (mode === "dark"){
//     color = "black";
// }
// if (mode === "light"){
//     color = "white";
// }
// console.log(color);

// let mode = "blue";
// let color;
// if (mode === "dark"){
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(mode);

// let age = 16;
// if (age >= 18) {
//     console.log("vote");
// }else {
//     console.log("not vote");
// }

// Odd or Even
// let num = 10; // u can change value ans will change
// if(num%2 === 0) {
    // console.log("even"); // or console.log(num, "is even")
// }else {
    // console.log("odd"); // or console.log(num, "is odd")
// }

// syntax -> rules
let mode = "blue";
let color;
if (mode === "dark") {
    color = "black";
}else if (mode === "blue") {
    color = "blue";
}else if (mode === "pink") {
    color = "pink"
}else {
    color = "white"
}
console.log(color);
