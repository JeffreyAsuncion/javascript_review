{
    let grades = [1, 2, 5,6,7,8,9,5,4,5,3];
    console.log(grades);

    //push adds to end of array
    grades.push(4);
    console.log(grades);

    //pop pops off the end of the array
    let poppedValue = grades.pop();
    console.log(grades);
    console.log(poppedValue);

    // unshift pushes to the front of the array
    grades.unshift(1234);
    console.log(grades);

    // shift pops off the front of the array
    grades.shift();
    console.log(grades);

    // change element in middle == use index
    // assignment at index
    console.log(grades);
    grades[1] = 40000;
    console.log(grades);

    // adding removing, replacing with splice
    let s1 = grades.splice(1, 2);
    console.log(s1); // this is the slice
    console.log(grades); // grades - slice

    // adding with splice - 2nd arg == 0
    let s2 = grades.splice(2, 0, 5, 6, 7, 8);
    console.log(s2);
    console.log(grades);

    // replacing
    grades.splice(2,4,0,0,0,0);
    console.log(grades);



}