{
    let grades = [20, 22, 29];
    let gradesB = [43, 12, 524, 34, 23];

    // does not change the original array
    grades.concat(gradesB);
    console.log(grades);
    console.log(grades.concat(gradesB));

    let tacos = grades.concat(gradesB);
    console.log(tacos);
    tacos.push(12, 442, 23, 12, 12);

    // push return the length and changes INPLACE and adds to the original array
    console.log(tacos.push(12, 442, 23, 12, 12));
    console.log(tacos);

    console.log(grades);
    
    // array addition is concat of str
    console.log(grades + tacos);

    // check if an array contains an element
    console.log(grades.includes(22));

    // find the indexOf
    console.log(grades.indexOf(22));
    console.log(grades.indexOf(1223)); // -1 === not in array

    // creates a str
    console.log(grades.join());
    console.log(grades.join(" "));
    console.log(grades.join(""));
    console.log(grades); // still original

    // slice - extract a section of the array
    grades = [12,123,23423,34,342,343,3434324,234234,234,23423423432,33423432423];
    console.log(grades.slice());
    console.log(grades.slice(3, 5)); // start, stop index non exclusive
    console.log(grades.slice(3)); // start and go to end of array
}