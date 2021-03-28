{
    let grades = [1, 2, 5,6,7,8,9,5,4,5,3];
    console.log(grades);

    let sorted_grades = grades.sort();
    console.log(sorted_grades);

    grades.push(15, 26, 262, 56,565,56, 57, 5,432, 4, 65);
    console.log(grades);

    console.log(grades.sort());

    // function is a callback function 
    console.log(grades.sort(function(a, b){return a - b}));

    grades.reverse();
    console.log(grades);

    grades.fill(-1, 0, grades.length)
    console.log(grades);

    // copy part of an array to the array itself
    // grades.copyWithin(); 
}