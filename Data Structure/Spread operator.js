const kellysPets = ['dog', 'cat', 'fish']
const jessiesPets = ['snake', 'rat', 'piglet']
let allPets = [...kellysPets, ...jessiesPets]

// allPets = [...allPets, 'goat']

console.log(allPets)


const kellysPetsNames = {dog: 'Benny', cat: 'Whisky', fish: 'Nemo'}
const jessiesPetsNames = {snake: 'Silver', rat: 'Barnie', piglet: 'Dave'}
const allPetsNames = {...kellysPetsNames, ...jessiesPetsNames}
console.log(allPetsNames)

// Task:
//     1. Use the spread operator to combine the two objects 
//        of Oscar winners into a single object just called 
//        'oscarWinners'.
//     2. Add the 2015 winner, which was called 'Spotlight', 
//        to 'oscarWinners'. (Be careful, you might need to change 
//        the const to a let!) 

const oscarWinnersOne = {2018: 'Green Book', 2017: 'The Shape of Water', 2016: 'Moonlight'}
const oscarWinnersTwo = {2021: 'Nomadland', 2020: 'Coda', 2019: 'Parasite'}
let OscarWinners = {...oscarWinnersOne, ...oscarWinnersTwo} 

OscarWinners = {...OscarWinners, 2015: 'Spotlight'} // Add the onemore OscarWinners 

console.log(OscarWinners)