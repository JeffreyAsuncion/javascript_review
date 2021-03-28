{
    // function expression instead of function declaration
    let myFunc = function (x, y){
        let total = 1;
        for(let i=0; i<y; i++){
            total *= x;
        }
        return total
    }

    // function invocation
    console.log(myFunc(3, 3));
}