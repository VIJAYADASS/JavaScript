import { createInterface } from 'readline';

import { exercise1 } from './Ex01.mjs';
import { exercise2 } from './Ex02.mjs';
import { exercise3 } from './Ex11.mjs';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Which Exercise do you want to run? Please enter the Ex Numbers[ex1, ex2, ex3]: ", (exerciseNumber) => {
   
    console.log(`You selected exercise: ${exerciseNumber}`);
    executeExercise(exerciseNumber);
    rl.close();
});

function executeExercise(exerciseNumber) {
    if (exerciseNumber === "ex1") {
        exercise1();
    } else if (exerciseNumber === "ex2") {
        exercise2();
    } else if (exerciseNumber === "ex3"){
        exercise3();
    } else {
        console.log("Invalid exercise number");
    }
}

