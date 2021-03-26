{
    var slicesOfPizza = 10;
    console.log(slicesOfPizza + 10);
    console.log(slicesOfPizza - 10);
    console.log(slicesOfPizza * 10);
    console.log(slicesOfPizza / 10);
    console.log(slicesOfPizza % 10);

    var precedence1 = 5 + 3 * 12 - 20 / 10;
    var precedence2 = 5 + (3 * 12) - (20 / 10);
    var precedence3 = (5 + 3) * (12 - 20) / 10;
    console.log(precedence1, precedence2, precedence3);
    /*

    +
    -
    *
    /
    %

    */
}