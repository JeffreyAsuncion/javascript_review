{
    let name = prompt("What is my name? ");
    // ternary Operator acts like an if-else statement
    let points = name === "Caleb" ? 10 : 0;
    console.log(points);

    if(name === "Caleb"){
        points = 10;
    } else {
        points = 0;
    }

    let name3 = prompt("What is my name? ");
    // ternary Operator acts like an if-else statement
    name3 === "Caleb" ? console.log("10 points") : console.log("0 points -_-");
    
}