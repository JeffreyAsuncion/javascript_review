{
    let grades = [];

    // indefinte while loop because condition is alway TRUE
    while(true){
        let input = prompt("Add a grade");
        // sentinel value
        if (input ==="q" || input === null){
            break;
        }
        
        grades.push(Number(input));
        console.log(grades)
    }
}