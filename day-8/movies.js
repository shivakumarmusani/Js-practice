//Assignment 1: Movie Object Creation  
// Theater Data
const cinema = {
  name: "AMB Cinemas",
  location: "HiTech City",
  movies: [
    {
      title: "Thandel",
      genere: "Action,Drama,Romantic",
      shows: ["10AM", "3PM"],
      seats: [60, 70],
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTY1LjJLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384012-lkcnqrjgfl-portrait.jpg"
    },
    {
      title: "Sankranthiki Vasthunam",
      genere: "Action,Comedy,Romantic",
      shows: ["11AM", "4PM"],
      seats: [40, 41],
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA4Ni44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418119-urxwxzudkv-portrait.jpg"
    },
    {
      title: "KGF",
      genere: "Action,Drama,Period",
      shows: ["2PM", "6PM"],
      seats: [50, 51],
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-et00042769-15-12-2020-08-08-47.jpg"
    }
  ]
};
// Display in Console
console.log(cinema);
console.log(cinema.name);
console.log("Theater Name:", cinema.name);
console.log(cinema.location);
console.log("location:", cinema.location);
console.log("First Movie:", cinema.movies[0].title);
console.log("second movie:", cinema.movies[1].title);
console.log("third movie:", cinema.movies[2].title);
console.log("first movie genere:", cinema.movies[0].genere);
console.log("Second movie genere:", cinema.movies[1].genere);
console.log("Third movie genere:", cinema.movies[2].genere);
console.log("first show:", cinema.movies[0].shows);
console.log("second show:", cinema.movies[1].shows);
console.log("third show:", cinema.movies[2].shows);
console.log(cinema.movies);
console.log(cinema.movies[0].seats);
console.log(cinema.movies[1].seats);
console.log(cinema.movies[2].seats);
