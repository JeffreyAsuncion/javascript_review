{
    function cube(x){
        return x**3;
    }

    // (x) the () or (x, y)
    // for one parameter the () are optional
    let cubeArrow = (x) => x**3;
    // let cubeArrow = (x) => {return x**3;};

    console.log(cube(5));
    console.log(cubeArrow(5));
}
