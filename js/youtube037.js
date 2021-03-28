{
    let grades = [12, 43, 17];
    console.log(grades[2]);

    let grades2 = [12, "c", {}, function(){console.log("hello")}];
    grades2[3]();

    let grades3 = [];
    grades3[0] = 12;
    grades3[1] = 43;
    grades3[40] = 2;
    console.log(grades3); //(41) [12, 43, empty × 38, 2]


    for (let i = 0; i < grades3.length; i++){
        console.log(grades3[i]);
    }

    let grades4 = [4,4,5,3,4523,45,234,5,5,43,4,4];
    console.log(grades4);
    // this truncates the list
    grades4.length = 3;

    console.log(grades4);
}