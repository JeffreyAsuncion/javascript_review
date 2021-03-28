{
    let grades = [15, 4, 4, 67, 54, 4, 45, 453, 5, 4, 45, 45];
    grades.length = 30;
    grades[34] = 40;
    
    let count = 0;
    let total = 0;
    for (let i = 0; i < grades.length; i++){
        if (grades[i] !== undefined){
            // legit value
            count++;
            total += grades[i];
        }       
    }
    let avg = total / count;
    console.log(avg);
}