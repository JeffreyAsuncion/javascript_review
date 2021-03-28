{
    let grades = [
        [12, 13, 32, 43, 42, 23],
        [22, 33, 34, 42, 22, 53, 56, 54, 6677, 7777],
        [32, 83, 72, 47, 72, 27]
    ];
    
    // would need to check for undefined in both loops
    // for(let i=0; i<grades.length; i++){
    //     // grades[i].length are for jagged arrays
    //     for(let j=0; j < grades[i].length; j++){
    //         console.log(grades[i][j]);
    //     }
    //     console.log("~~~~~~~~~");
    // }

    grades.forEach(function(row){
            row.forEach(function(col){
                console.log(col);
            });    
        console.log("~~~~~~~~~");
        });

}