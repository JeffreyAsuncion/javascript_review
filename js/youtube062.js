{
    //  bind
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
        
    }

    // .bind("hello") assigns this to a new function
    let newFunction = doStuff.bind("hello", 5, 15);

    newFunction();
}

{
    //  bind
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
        
    }

    // .bind("hello") assigns this to a new function
    let me = {name : "Caleb"};
    let newFunction = doStuff.bind(me, 5, 15);

    newFunction();
}