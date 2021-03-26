(function(){
    //IIFE - immediately invoked function expression
    
    // if var not defined then it goes up to the global scope
    var age = 5;

    // this makes it global
    // age = 5;

})();


{
    // block
    let y = 10;
    const x = 20;
    {
        let y = 6;
        console.log(y);
    }
    console.log(y, x);

    var z = 100; // can be accessed window.z
}

