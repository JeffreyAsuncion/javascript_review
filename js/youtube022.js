{
    // create object
    let position = {
        x: 10,
        y: 20,
        print: function(){
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },
        myObject: {sweetProperty: "Hello Friends"}
    }
    function print(){
        // this is a function context
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
    // pass object to a variable
    // point to same object
    let myPosition = position;

    console.log(position); // {x: 10, y: 20}
    console.log(myPosition);// {x: 10, y: 20}

    myPosition.x = 15;
    console.log(position); // {x: 15, y: 20}
    console.log(myPosition);// {x: 15, y: 20}

    print();
    position.print();
    console.log(position.myObject.sweetProperty);
}