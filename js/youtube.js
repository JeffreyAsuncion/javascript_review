{
    let grades = [15, 4, 4, 67, 54, 4, 45, 453, 5, 4, 45, 45];
    grades.length = 30;
    grades[34] = 40;
    
    let found = false;
    let search = 45;

    for (let i = 0; i < grades.length; i++){
        // check if the value is undefined
        // if (grades[i] !== undefined){
        //     // legit
        //     console.log(grades[i]);
        // }
        if (grades[i] === search){
            //found
            found = true;
            console.log(grades[i]+ ' at index ' + i);
            // stop after first on
            // break; // uncomment this to stop at the first one
        }       
    }
    if (found){
        // do something
    }

}