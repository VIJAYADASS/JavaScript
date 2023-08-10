var bird = {
    canFly : true,
    hasFeathers : true,
    hasWings : true
}

// We can call the obj in new var and obj.create method
 var eagle = Object.create(bird);

 console.log("eagle canfly: ", eagle.canFly);
 console.log("eagle Wings: ", eagle.hasWings);
 console.log("eagle has Feathers: ", eagle.hasFeathers);