{
    function normal(){
        return this;
    }

    let arrow = () => this;
    // use bind to change this value to "hello"
    let newFunc = arrow.bind("hello");
    console.log(newFunc()); // this, window object
    // bind doesn't change value of arrow functions
    
    // here bind works with a normal function
    console.log(normal.bind("this")());
}