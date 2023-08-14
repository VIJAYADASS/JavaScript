const Movies = ["Ironman", "Batman", "Thor", "Spiderman", "Hulk", "Thanos", "Captain America"]

EndgameMovieCast = Movies.map(function (Yes){
    return `${Yes}`
});
console.log(EndgameMovieCast);

// Task 
// Now refactor your code to use the .map method. 
// You should no longer need to use the .push() 
// method or declare an empty array.

const numbers = [ 10,2, 3, 1, 0, 40, 56, 99, 78];

const filteredNumbers = numbers.map(number => {
  if (number >= 3 && number <= 40) {
    return number;
  }
});

console.log(filteredNumbers.filter(number => number !== undefined));


