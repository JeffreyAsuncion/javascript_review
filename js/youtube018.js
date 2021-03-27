{
    let x = 5789709799;
    console.log(x.toExponential(10)); // 5.7897097990e+9

    let a = 5.789709799;
    console.log("$" + a.toFixed(2)); //$5.79
    
    let b = 5789709799;
    console.log(b.toLocaleString()); //5,789,709,799
    
    let c = 5789709799;
    console.log(c.toPrecision(2)); // 5.8e+9

    let d = new Number(5463456);
    console.log("$" + d.valueOf()) // $5463456
    console.log(typeof(d)); // object

    var abs = Math.abs(-36); // 36
    var goUp = Math.ceil(.000000001); // 1
    var goDown = Math.floor(.999999); // 0
    var powerUp = Math.pow(3, 2); // 9
    var roundUp = Math.round(4.9); // 5
    var roundDown = Math.round(5.1); // 5
    var isPositive = Math.sign(-Infinity); // -1 (false)
    var getInt = Math.trunc(4.99999); //4


}