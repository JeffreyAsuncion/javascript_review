{
    let name = prompt("What is your name? ");

    switch(name){
        case "Caleb":
            console.log("Welcome Caleb!");
            break; // break prevents fall through
        case "Claire":
            console.log("Hello Claire!");
            break;
        default:
            console.log("I guess you're welcome...");
            break;
        
    }
}