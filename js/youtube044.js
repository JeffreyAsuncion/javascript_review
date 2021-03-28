{
    let grades = [12, 13, 32, 43, 42, 23];
    // create undefined elements in array
    grades.length = 30;

    for (let i = 0; i < grades.length; i++){
        if(grades[i] !== undefined) console.log(grades[i]);
    }

    // forEach work with element and ignores undefined
    // just element
    grades.forEach(function(element){
        console.log("Hello " + element )
    });
    
    // forEach work with element and ignores undefined
    // element, index
    grades.forEach(function(element, index){
            console.log("Hello " + element, index )
        });

    // forEach work with element and ignores undefined
    // element, index, array
    grades.forEach(function(element, index, array){
            console.log("Hello " + element, index, array )
        });
}