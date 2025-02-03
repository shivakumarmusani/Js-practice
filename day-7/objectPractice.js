// 1. Create a movie object using the simple way (object literal)
const movie1 = {
    name: "Avatar",
    price: 200,
    language: "English",
};
console.log(movie1);

// 2. Create empty object first, then add properties
const movie2 = {};
movie2.name = "Batman";
movie2.price = 180;
movie2.language = "Hindi";
console.log(movie2);

// 3. Create object using square bracket notation
const movie3 = {};
movie3["name"] = "Superman";
movie3["price"] = 220;
movie3["language"] = "Telugu";
console.log(movie3);
console.log(movie1,movie2,movie3);

// Task 1: Create a student object with:
const student1 = {
    name: "ajaykumar",
    age: 25,
    grade: "A",
};
console.log(student1);

const student2 = {};
student2.name = "laxman";
student2.age = 26;
student2.grade = "B";
console.log(student2);

const student3 = {};
student3["name"] = "ravi";
student3["age"] = "27";
student3["grade"] = "C"
console.log(student3);
console.log(student1,student2,student3);

// Task 2: Create a mobile phone object with:

const mobile1 = {
    brand: "redmi",
    price: 10000,
    color: "black",
};
console.log(mobile1);

const mobile2 = {};
mobile2.brand = "realme";
mobile2.price = 15000;
mobile2.color = "blue";
console.log(mobile2);

const mobile3 = {};
mobile3["brand"] = "oneplus";
mobile3["price"] = 20000;
mobile3["color"] = "red";
console.log(mobile3);
console.log(mobile1,mobile2,mobile3);