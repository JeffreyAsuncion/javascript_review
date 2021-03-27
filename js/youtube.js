{
    var age = prompt();

    if(age < 13 || age >= 65){
        console.log("too young to work or too old")
    } else {
        console.log("look for job")
    }

    var age = prompt("Age? ");
    var name = prompt("Name? ")
    if(age < 13 && name === "Caleb"){
        console.log("Welcome!");
    }

    var age = prompt("Age? ");
    var name = prompt("Name? ")
    if(age < 13){
        if (name === "Caleb"){
        console.log("Welcome!");
        }
    }

    var age = prompt("Age? ");
    var name = prompt("Name? ")
    if(age < 13 && !(name === "Caleb")){
        console.log("Welcome! Not Caleb");
    }
}