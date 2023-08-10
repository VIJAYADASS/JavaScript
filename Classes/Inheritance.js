var bird = {
    canFly : true,
    hasFeathers : true,
    hasWings : true,
    hasDance : true
}

// We can call the obj in new var and obj.create method
 var eagle = Object.create(bird);

 console.log("eagle canfly: ", eagle.canFly);
 console.log("eagle Wings: ", eagle.hasWings);
 console.log("eagle has Feathers: ", eagle.hasFeathers);

//  Ex- penguin

var penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin: ", penguin);

// Ex- peacock

var peocock = Object.create(bird);
peocock.hasDance = true;
console.log("peocock: ", peocock);