{
    //  apply 
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
        
    }

    // .apply("hello") assigns this and runs doStuff([5, 10])
    // doStuff.apply("hello", [5, 10]);
    let args = [5, 10];
    doStuff.apply("hello", args);
}