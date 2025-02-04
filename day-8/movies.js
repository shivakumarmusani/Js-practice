//Assignment 1: Movie Object Creation  
// Theater Data
const cinema = {
  name: "AMB Cinemas",
  location: "HiTech City",
  movies: [
    { 
      title: "Kalki", 
      shows: ["10AM", "3PM"],
      seats: [60, 70]
    },
    {
      title: "Pushpa 2",
      shows: ["11AM", "4PM"],
      seats: [40, 41]
    },
    {
        title: "KGF",
        shows: ["2PM","6PM"],
        seats: [50,51]
    }
  ]
};
// Display in Console
console.log(cinema);
console.log(cinema.name);
console.log("Theater Name:", cinema.name);
console.log(cinema.location);
console.log("location:",cinema.location);
console.log("First Movie:", cinema.movies[0].title);
console.log("second movie:", cinema.movies[1].title);
console.log("third movie:",cinema.movies[2].title);
console.log("first show:",cinema.movies[0].shows);
console.log("second show:",cinema.movies[1].shows);
console.log("third show:",cinema.movies[2].shows);
console.log