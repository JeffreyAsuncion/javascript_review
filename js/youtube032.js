{
    let password;
    do{
        password = prompt("What is the passcode? ");
    } while(password.toLocaleLowerCase() !== 'let me in');


    for(let i = 0; i < 10; i = i + 2){
        console.log(i);
    }

    let list = [1, 3, 4, 6, 7, 5, 4, 2, 3];
    for (let i=0; i<list.length; i++){
        console.log(list[i]);
    }

    let myString = "Search this string baby";
    let chartoSearch = 'c'
    for (i=0; i<myString.length; i++){
        if(myString[i] === chartoSearch){
            console.log(myString[i] + ' is found at index ' + i);
        }
        
    }
}