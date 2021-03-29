{
    let arrow = () => this;

    function normal(){
        return this;
    }

    console.log(arrow()); // this, windows object
    console.log(normal());// this, windows object


    let functions = {
        arrow: arrow,
        normal: normal
    };

    console.log(functions.arrow()); // this, windows object
    console.log(functions.normal()); // object
}
