const Number = ["7273747572", '9192939495', '8182838485', '71727374']

ValidatedNumber = Number.filter(function(num){
     return num.length == 10
   
})

console.log(ValidatedNumber);

// Task 
// Use the filter method to:
//        - Remove any number greater than 40.
//        - Remove any number less than 3.

const kmWalked = [ 10,2, 3, 1, 0, 40, 56, 99, 78 ]

const filteredNumbers = kmWalked.filter(number => number <= 40 && number >= 3);

console.log( filteredNumbers);