{
    // implicit parameters

    function pow(x, y, ...extra){
        console.log(this);
        console.log(arguments); // for implicit arguments
        console.log(extra);
        
        let total = 1;
        for(let i=0; i<y; i++){
            total *= x;
        }
        return total;
    }

    function largest(x, ...extra){
        let largest = x;
        for(i=0; i<extra.length; i++){
            if(extra[i] > largest){
                largest = extra[i];
            }
        }
        return largest;
    }

    // too many arguments
    console.log(pow(3, 3));

}