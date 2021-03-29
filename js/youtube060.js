{
    let me = {
        name: "Caleb",
        outputMe: outputMe
    };
    
    function outputMe(){
        'use strict';
        console.log(this);
    }
    
    function outputMeStrict(){
        'use strict';
        console.log(this);
    }

    // calling a function as a constructor
    function Person(){
        console.log(this);
        this.name = "Caleb";
        console.log(this);
    }

    me.outputMe(); // invoke a function as a method
    outputMe(); // just a regular function call
    outputMeStrict(); // envoking in function in strict mode

    // call function as a constructor using the "new" keyword
    let person = new Person();
    console.log(person);

}