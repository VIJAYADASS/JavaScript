//Template literals
let temp = 23
let place = 'Edinburgh'

// console.log("Today it's " + temp + " degrees C here in " + place)
console.log(`Today it's ${temp} degrees C here in ${place}`) // using the backstick and curly bracket and dolor sign

//Example

let Temp  = 32
let place1 = 'Tamilnadu'

console.log(`Today it's ${Temp} degree C here in ${place1}`)// use dolor sign means identify the object

//task 
function milesToKm(miles) { //define a function named milesToKm that takes a parameter miles.
    return miles * 1.609; //conversion factor of 1.609 (since 1 mile is approximately 1.609 kilometers).
}
//define a constant variable named distanceInMiles

const distanceInMiles = 8550; // Replace this with the actual distance from your location to London
const distanceInKm = milesToKm(distanceInMiles);
console.log(`The distance to London is ${distanceInKm.toFixed(4)} KMs.`); // toFixed() method ensures that the distance is rounded to two decimal places for better readability.