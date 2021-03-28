{
    let grades = [15, 4, 4, 67, 54, 4, 45, 453, 5, 4, 45, 45];
    grades.length = 30;
    grades[34] = 40;
    
    // assume the first element is the largest
    let largest = grades[0]
    let index = 0;
    for (let i = 0; i < grades.length; i++){

        if (grades[i] > largest){
            // replace largest
            largest = grades[i];
            index = i;
        }       
    }
    console.log(largest + ' at index ' + index);
}