const Number = ["7273747572", '9192939495', '8182838485', '71727374']

ValidatedNumber = Number.filter(function(num){
     return num.length == 10
   
})

console.log(ValidatedNumber);
