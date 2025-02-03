// Example: Array of movie objects
const movies = [
    {
        name: "Movie 1",
        price: 200
    },
    {
        name: "Movie 2",
        price: 180
    },
    {
        name: "kfg",
        price: 160,
    }
];
console.log(movies); // print for all
console.log(movies[0]); // show the only movie details//name:"movie1" price: 200
console.log("name:", movies[0].name);// show only first name:"movie1"
console.log("price:", movies[0].price); // show only first price: 200
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[0], movies[1], movies[2]);

// Task 1: Create an array of 3 student objects
// Each student should have:
// - name
// - age
// - grade
const student = [
    {
        name: "ajay",
        age: 25,
        grade: "A",
    },
    {
        name: "ravi",
        age: 26,
        grade: "B",
    },
    {
        name: "bhanu",
        age: 27,
        grade: "C",
    },
];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[0], student[1], student[2]);

// Task 2: Create an array of 3 mobile objects
// Each mobile should have:
// - brand
// - price
// - color
const mobile = [
    {
        brand: "redmi",
        price: 9000,
        color: "black",
    },
    {
        brand: "realme",
        price: 14000,
        color: "red",
    },
    {
        brand: "oneplus",
        price: 19000,
        color: "blue"
    }
];
console.log(mobile[0]);
console.log(mobile[1]);
console.log(mobile[2]);
console.log(mobile[0], mobile[1], mobile[2]);

// Test Object Creation:
const student4 = {
    name: "John",
    age: 15,
    grade: "A"
};
console.log(student4);
console.log(student4.name);    // Shows name
console.log(student4["age"]); // Shows age

//Test Combined Objects and Arrays:
const student5 = [
    { name: "John", age: 15 },
    { name: "Jane", age: 16 }
];
console.log(student5);
console.log(student5[0].name); // Shows first student's name
console.log(student5[1].name); // shows second student's name
console.log(student5[0].age); // shows first student age
console.log(student5[1].age); // shows second student age
console.log(student5[0], student5[1]);

//Test Array Creation:
const colors = ["red", "blue", "green"];
console.log(colors);
console.log(colors[0]);     // Shows first color
console.log(colors.length); // Shows how many colors

//Test Combined Objects and Arrays:
const students6 = [
    { name: "John", age: 15 },
    { name: "Jane", age: 16 }
];
console.log(students6);
console.log(students6[0].name); // Shows first student's name
console.log(students6.length);//show students6 total length
console.log(students6[0]);//show only first name and first age
