{
    // too few arguments

    // case 1 using default parameters
    function pow(x, y=2){
        // case 2
        // if(y===undefined){y=2;}

        //case 3
        // typeof y === "undefined" ? 2:y;
        let total = 1;
        for(let i=0; i<y; i++){
            total *= x;
        }
        return total;
    }

    // less arguments
    console.log(pow(3));

}

/*

1. default parameters y=2 line 2
2. test value of y in the function
3. using ternary operator
*/