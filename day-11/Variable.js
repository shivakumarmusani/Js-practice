//Day 11: JavaScript Variables Assignments
//Understanding Variables & Memory
//Assignment 1: Variable Types & Memory
/*
Assignment: Create Instagram Post Variables
Observe how different types of data are stored
*/

// Create these variables:
let postTitle = "My First Post";
let likesCount = 0;
const POST_ID = "POST123";
var isPublished = false;

// Try this:
console.log(postTitle);    // Should show: My First Post
postTitle = "Updated Post"; //postTitle is declared using let, which allows reassignment.
//So, postTitle is successfully updated to "Updated Post"
//POST_ID = "POST124";    // This will error! Why? already const is declear the "POST123" 

//Assignment 2: Variable Scope 🎯

/*
Assignment: Create Instagram Story Variables
See how variables work in different scopes
*/

// Global Variables
let storyViews = 0;
const STORY_DURATION = 24; // hours

{
    // Block scope
    let storyFilter = "Normal";
    var storyLocation = "Hyderabad";
    const UPLOADED_TIME = "9:00 AM";
}

// Check what happens:
console.log(storyLocation);  // Works! Why?//storyLocation is declared using var, which has function scope 
// (or global scope if declared outside a function).
//Since var is not block-scoped, it is still accessible outside the block.
//console.log(storyFilter);    // Error! Why?  //storyFilter is declared using let, which is block-scoped.
//It only exists inside the {} block, so trying to access it outside causes a ReferenceError
// console.log(UPLOADED_TIME);  // Error! Why?  //UPLOADED_TIME is declared using const, which is also block-scoped (like let).
//Since it's declared inside the {} block, it cannot be accessed outside, causing a ReferenceError.

//Assignment 3: Reference vs Value 📚

/*
Assignment: Create Instagram User Profile
Understand how objects and primitives are stored
*/

// Create these variables:
let userName = "john_doe";
let followerCount = 100;

let profile = {
    name: "John Doe",
    age: 25
};

let profile2 = profile;  // What happens in memory?

// Try changing values:
userName = "jane_doe";     // Only userName changes
profile2.name = "Jane";    // Both profile and profile2 change! Why?// profile2 have a profile value and let can be reassignable and 
//object(profile2.name = "Jane") can be change to "jane"

//Assignment 4: Variable Hoisting ⬆️

/*
Assignment: Test Variable Hoisting
See how different variables behave before declaration
*/

// Try this sequence:
console.log(views);      // What happens?
// console.log(likes);   // What happens?
// console.log(SHARES);  // What happens?

var views = 100; //undefined(var is hoisted and initialized with undefined)
let likes = 50; //TDZ(temporal dead zone)let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until execution reaches their declaration
const SHARES = 25;//TDZ(temporal dead zone) Accessing let or const before declaration results in a ReferenceError

//Assignment 5: Primitive Data Types 📊

/*
Assignment: Create Instagram Post Analytics
Work with different primitive types
*/

// Create these variables:
let postCaption = "Beautiful sunset!";  // String
let viewCount = 1500;                   // Number
let isLiked = false;                    // Boolean
let postTime;                           // Undefined
let oldPost = null;                     // Null

// Check type of each:
console.log(typeof postCaption);  // "string"
console.log(typeof viewCount);    // "number"
console.log(typeof isLiked);      // "boolean"
console.log(typeof postTime);     // "undefined"
console.log(typeof oldPost);      // "object"

//Assignment 6: Object Properties 🎭

/*
Assignment: Create Instagram Post Object
See how object properties are stored and accessed
*/

// Create a post object:
const post = {
    id: "123",
    text: "Hello World",
    likes: 0
};

// Try modifying:
post.likes = 1; // Works! Why? This works because post is an object, and with const,
// the reference to the object cannot be reassigned.BUT you can still modify the properties of the object itself.
//  Changing the value of post.likes does not change the reference of the object, so it's allowed.
// post = {};  // Error! Why? post is declared as a const variable,With const, the reference to the object cannot be changed,
// so you cannot reassign post to a new object ({}).
// The const only locks the reference to the original object, not the object's internal properties.
post.shares = 0; // Works! Why? Works! Adding new properties to the post object is allowed because you're still working with 
// the same reference,and const doesn't prevent you from adding or modifying properties inside the object.
//  The reference to the object remains the same, even if new properties are added.
console.log(post); //Modifying properties like post.likes and adding new properties like post.shares works fine.
//Reassigning the entire object (post = {}) will throw an error because const prevents reassignment of the object reference.

//Practice Questions 📝

//1. **What will happen?**
let x = 10;
let y = x;
x = 20;
console.log(y);  // What prints? Why?//X=10 after y=x assign then y=10
//x = 20; – The value of x is now changed to 20. However, y still holds the value that was copied from x earlier, which was 10.

//2. **Spot the Error:**
const user = { name: "John" };
user.name = "Jane";      // Works or error?This works. Even though user is declared with const, the properties inside the object can be modified.
// The object reference itself is constant, but the values inside the object (like name) can be changed
//user = { name: "Bob" };  // Works or error?This will throw an error.
// You cannot reassign a new object to user because user was declared as a const.
// A const variable cannot be reassigned, though its contents (if they are objects or arrays) can be modified.
console.log(user);//At this point, user.name has been modified to "Jane" // output={name: 'Jane'}

//3. **Memory Challenge:**
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(b.value); //What prints? Why?//It prints 20 because b is not a copy of a, but a reference to the same object in memory.
// When you change a.value, it also affects b.value since both point to the same object.



