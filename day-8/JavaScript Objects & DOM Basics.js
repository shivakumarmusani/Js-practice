//Day 8: JavaScript Objects & DOM Basics  
//Book MyShow App Creation!
//Part 1: Primitives vs Non-Primitives (Morning Session)
//1. Data Types Comparison

// Primitives (Single Values)
let movieName = "sankarathi vastunam";// String
let rating = 4.5;// Number
let isBlockbuster = true;// Boolean
console.log(movieName,rating,isBlockbuster);
console.log("movieName =",movieName,"rating =",rating,"isBlockbuster =",isBlockbuster);

// Non-Primitives (Objects/Collections)
let movie = {
  name: "Daku Maharaj",
  genre: "Action"
}; // Object
console.log(movie);
console.log(movie.name,movie.genre);

let showTimes = ["10AM", "2PM", "6PM"]; // Array
//Practice Exercise 1:
// Create movie object with array
let myMovie = {
  title: "KGF",
  actors: ["Yash", "surya"],
  rating: 4.8,
  is3D: false
};
console.log(myMovie);
console.log(myMovie.actors);
console.log(myMovie.title);
console.log(myMovie.rating);
console.log(myMovie.is3D);

//2. Creating Objects & Arrays
// 3 Ways to Create Objects
// 1. Literal Method (Most Common)
let movie1 = { 
  name: "Game Changer", 
  director: "Rajamouli" 
};
console.log(movie1);
console.log(movie1.name);
console.log(movie1.director);
console.log(movie1.name,movie1.director);
console.log("name:",movie1.name,"diretor:",movie1.director);

// 2. Empty Object + Properties
let movie2 = {};
movie2.name = "RRR";
movie2.budget = "500Cr";
console.log(movie2);
console.log("name:",movie2.name,",budget:",movie2.budget);
console.log(movie2.name);
console.log(movie2.budget);

// 3. From Existing Object
let movie3 = Object.create(movie1);
movie3.name = "Bahubali";
console.log(movie3);
console.log("name:",movie3.name);

// 3 Ways to Create Arrays
let prices = [250, 300, 400]; // Literal
let seats = new Array(60, 60, 60); // Constructor
let codes = Array.from("A12B34"); // From string
console.log(prices);
console.log(seats);
console.log(codes);

//Practice Exercise 2:
// Create theater object with arrays
let theater = {
  name: "PVR Cinemas",
  screens: ["Screen1", "Screen2"],
  facilities: ["AC", "Dolby Atmos"],
  showCount: 5
};
console.log(theater);//show the all theater information
console.log(theater.name);//only show the theater name
console.log("name:",theater.name);//only show the theater name(name: PVR Cinemas)
console.log(theater.screens);//show the only screens
console.log(theater.screens[0]);//only show the screen1
console.log(theater.screens[1]);//only show the screen2
console.log(theater.facilities);//show the theater all facilities information
console.log(theater.facilities[0]);//only show the facilities[0]=(AC)
console.log(theater.facilities[1]);//only show the facilities[1]=(Dolby Atmos)
console.log(theater.showCount);//show the theater showcount
