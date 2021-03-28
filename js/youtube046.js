{
    let grades = [
        [12, 13, 32, 43, 42, 23],
        [22, 33, 34, 42, 22, 54, 56, 54, 6677, 7777],
        [32, 83, 72, 47, 72, 27]
    ];
    
    // Label this for loop - outerLoop
    outerLoop: for(let i=0; i<grades.length; i++){
        // grades[i].length are for jagged arrays
        for(let j=0; j < grades[i].length; j++){
            console.log(grades[i][j]);
            if(grades[i][j] === 54){
                console.log("You found the value!");
                break outerLoop;
                // continue outerLoop; // brings you to the outerLoop label
                //break; // if found break out of current loop
                //continue;
            }
            // this where continue regular get you
        }
        console.log("~~~~~~~~~"); // this code is ignored with continue outerloop
        // this code is not ignored with a break
    }
    // break outerLoop ends here
}